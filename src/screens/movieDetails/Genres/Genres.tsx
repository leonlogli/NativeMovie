import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

import { MovieDetails } from '../../../services/movieDetailsService';
import styles from './Genres.style';
import sharedStyle from '../../../utils/sharedStyle';

export type GenresProps = {
  movie: MovieDetails;
};

const Genres = ({ movie }: GenresProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[sharedStyle.title, { color: colors.text }]}>
          Genres - {movie.genres?.map((genre) => genre.name).join(', ')}
        </Text>
        <Text style={[styles.overview, { color: colors.text }]}>
          {movie.overview}
        </Text>
        <Text style={[styles.distribution, { color: colors.text }]}>
          Distribution -{' '}
          {movie.production_companies?.map((genre) => genre.name).join(', ')}
        </Text>
      </View>
    </View>
  );
};

export default Genres;
