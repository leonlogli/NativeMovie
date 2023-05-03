import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useAuth } from '../../context/AuthProvider';
import favoriteService from '../../services/favoriteService';
import { MoviePreview } from '../../services/movieListService';
import useToggleFavorite from './useToggleFavorite';
import styles from './FavoriteIcon.style';

export type FavoriteIconProps = TouchableOpacityProps & {
  movie: MoviePreview;
};

const FavoriteIcon = ({ style, movie }: FavoriteIconProps) => {
  const { user } = useAuth();

  const userId = user?.uid;
  const movieId = movie.id;

  const { data: favorite } = useQuery(
    ['isFavorite', movieId, userId],
    ({ queryKey }) =>
      favoriteService.isFavorite(queryKey[1] as string, queryKey[2]),
    { enabled: !!userId && !!movieId },
  );

  const { toggleFavorite } = useToggleFavorite({
    userId,
    movie,
    favorite: !!favorite,
  });

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
