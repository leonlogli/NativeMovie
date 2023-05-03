import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../../context/AuthProvider';
import favoriteService, { FavoriteMovie } from '../../services/favoriteService';
import { MoviePreview } from '../../services/movieListService';
import styles from './FavoriteIcon.style';

export type FavoriteIconProps = TouchableOpacityProps & {
  movie: MoviePreview;
};

const FavoriteIcon = ({ style, movie }: FavoriteIconProps) => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const userId = user?.uid;
  const movieId = movie.id;

  const { data: favorite } = useQuery(
    ['isFavorite', movieId, userId],
    ({ queryKey }) =>
      favoriteService.isFavorite(queryKey[1] as string, queryKey[2]),
    { enabled: !!userId && !!movieId },
  );

  const removeFavMuation = useMutation(favoriteService.removeFavorite, {
    onSuccess: () => {
      queryClient.removeQueries(['isFavorite', movieId, userId]);

      queryClient.setQueryData<FavoriteMovie[]>(
        ['getFavoriteMovies', userId],
        (prev) => prev?.filter((m) => String(m.id) !== String(movieId)),
      );
    },
  });

  const addFavMuation = useMutation(favoriteService.addFavorite, {
    onSuccess: (data) => {
      queryClient.setQueryData<FavoriteMovie>(
        ['isFavorite', movieId, userId],
        (prev) => ({ ...prev, ...data }),
      );

      queryClient.setQueryData<FavoriteMovie[]>(
        ['getFavoriteMovies', userId],
        (prev) => [data, ...(prev || [])],
      );
    },
  });

  const toggleFavorite = () => {
    if (favorite) {
      return removeFavMuation.mutate({ movieId: movieId, userId });
    }

    return addFavMuation.mutate({ movie, userId });
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={toggleFavorite}
    >
      <MaterialIcons
        name={favorite ? 'favorite' : 'favorite-outline'}
        size={22}
        color="#fff"
      />
    </TouchableOpacity>
  );
};

export default FavoriteIcon;
