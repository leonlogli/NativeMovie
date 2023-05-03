import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ID } from '../../config/api';
import favoriteService, { FavoriteMovie } from '../../services/favoriteService';
import { MoviePreview } from '../../services/movieListService';

export type UseToggleFavoriteOpts = {
  movie: MoviePreview;
  favorite?: boolean;
  userId?: ID;
};

const useToggleFavorite = ({
  favorite,
  userId,
  movie,
}: UseToggleFavoriteOpts) => {
  const queryClient = useQueryClient();

  const movieId = movie.id;

  const removeFavMuation = useMutation(favoriteService.removeFavorite, {
    // Handle Optimistic Updates
    onMutate: async (input) => {
      // Stop the queries that may affect this operation
      await queryClient.cancelQueries(['getFavoriteMovies', input.userId]);

      // Get a snapshot of current data
      const previousFavorites = queryClient.getQueryData([
        'getFavoriteMovies',
        input.userId,
      ]);

      // Modify cache to reflect this optimistic update
      queryClient.setQueryData<FavoriteMovie[]>(
        ['getFavoriteMovies', input.userId],
        (prev) => prev?.filter((m) => String(m.id) !== String(input.movieId)),
      );

      const removedFavorite = queryClient.removeQueries([
        'isFavorite',
        input.movieId,
        input.userId,
      ]);

      queryClient.removeQueries(['isFavorite', input.movieId, input.userId]);

      // Return a snapshot so we can rollback in case of failure
      return { previousFavorites, removedFavorite };
    },
    onError: (error, input, { previousFavorites, removedFavorite }: any) => {
      // Rollback the changes using the snapshot
      queryClient.setQueryData(
        ['getFavoriteMovies', input.userId],
        previousFavorites,
      );

      queryClient.setQueryData<FavoriteMovie>(
        ['isFavorite', movieId, userId],
        (prev) => ({ ...prev, ...removedFavorite }),
      );
    },
    onSuccess: (_data, input) => {
      queryClient.removeQueries(['isFavorite', input.movieId, input.userId]);
    },
    onSettled: (_data, _err, input) => {
      // Invalidate related queries so that they can be refetched after
      queryClient.invalidateQueries(['getFavoriteMovies', input.userId]);
    },
  });

  const addFavMuation = useMutation(favoriteService.addFavorite, {
    // Handle Optimistic Updates
    onMutate: async (input) => {
      // Stop the queries that may affect this operation
      await queryClient.cancelQueries(['getFavoriteMovies', input.userId]);

      // Get a snapshot of current data
      const previousFavorites = queryClient.getQueryData([
        'getFavoriteMovies',
        input.userId,
      ]);

      // Modify cache to reflect this optimistic update
      queryClient.setQueryData<FavoriteMovie[]>(
        ['getFavoriteMovies', input.userId],
        (prev) => [{ ...input, updatedAt: Date.now() } as any, ...(prev || [])],
      );

      queryClient.setQueryData<FavoriteMovie>(
        ['isFavorite', input.id, input.userId],
        (prev) => ({ ...prev, ...input } as any),
      );

      // Return a snapshot so we can rollback in case of failure
      return { previousFavorites };
    },
    onError: (error, input, { previousFavorites }: any) => {
      // Rollback the changes using the snapshot
      queryClient.setQueryData(
        ['getFavoriteMovies', input.userId],
        previousFavorites,
      );
      // remove the added favorite
      queryClient.removeQueries(['isFavorite', input.id, input.userId]);
    },
    onSettled: (_data, _err, input) => {
      // Invalidate related queries so that they can be refetched after
      queryClient.invalidateQueries(['getFavoriteMovies', input.userId]);
    },
  });

  const toggleFavorite = () => {
    if (favorite) {
      return removeFavMuation.mutate({ movieId: movieId, userId });
    }

    return addFavMuation.mutate({ ...movie, userId });
  };

  return { toggleFavorite };
};

export default useToggleFavorite;
