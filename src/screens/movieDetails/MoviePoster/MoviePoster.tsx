import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { MOVIE_IMAGE_URL } from '../../../config/constants';
import { MovieDetails } from '../../../services/movieDetailsService';
import MoviePosterActions from '../MoviePosterActions';
import styles from './MoviePoster.style';

export type MoviePosterProps = {
  movie: MovieDetails;
};

const MoviePoster = ({ movie }: MoviePosterProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${MOVIE_IMAGE_URL}/${movie.poster_path || movie.backdrop_path}`,
        }}
        resizeMode="cover"
        style={styles.image}
      />

      <LinearGradient
        colors={[colors.background, 'transparent']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradient}
      />

      <View style={styles.infoContainer}>
        <MoviePosterActions movie={movie} />
      </View>
    </View>
  );
};

export default MoviePoster;
