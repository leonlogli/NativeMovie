import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import FavoriteIcon from '../../../components/FavoriteIcon';
import type { MovieDetails } from '../../../services/movieDetailsService';
import sharedStyle from '../../../utils/sharedStyle';
import styles from './MoviePosterActions.style';
import PlayMovieButton from '../../../components/PlayMovieButton/PlayMovieButton';

export type MoviePosterActionsProps = {
  movie: MovieDetails;
};

const MoviePosterActions = ({ movie }: MoviePosterActionsProps) => (
  <View style={styles.actionsContainer}>
    <View style={sharedStyle.flex1}>
      <Text style={[sharedStyle.title]}>{movie.title} pm</Text>
    </View>

    <View style={styles.iconContainer}>
      <PlayMovieButton movie={movie} />
      <FavoriteIcon movie={movie} />
    </View>
  </View>
);

export default MoviePosterActions;
