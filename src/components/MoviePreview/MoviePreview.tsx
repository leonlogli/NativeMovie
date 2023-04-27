import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { MOVIE_IMAGE_URL } from '../../config/constants';
import { Movie } from '../../services/movieListService';
import styles from './MoviePreview.style';

export type HorizontalMovieListProps = {
  movie: Movie;
  onClick: (movie: Movie) => void;
};

const MoviePreview = ({ movie, onClick }: HorizontalMovieListProps) => {
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

export default MoviePreview;
