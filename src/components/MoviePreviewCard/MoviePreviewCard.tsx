import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { MOVIE_IMAGE_URL } from '../../config/constants';
import { MoviePreview } from '../../services/movieListService';
import styles from './MoviePreviewCard.style';

export type MoviePreviewCardProps = {
  movie: MoviePreview;
  onClick: (movie: MoviePreview) => void;
};

const MoviePreviewCard = ({ movie, onClick }: MoviePreviewCardProps) => {
  const { colors } = useTheme();

  const handlePress = () => onClick(movie);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.movieContainer, { backgroundColor: colors.card }]}
    >
      <Image
        source={{ uri: `${MOVIE_IMAGE_URL}${movie.poster_path}` }}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default MoviePreviewCard;
