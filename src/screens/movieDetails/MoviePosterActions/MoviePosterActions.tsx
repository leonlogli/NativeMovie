import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import FavoriteIcon from '../../../components/FavoriteIcon';
import type { MovieDetails } from '../../../services/movieDetailsService';
import sharedStyle from '../../../utils/sharedStyle';
import styles from './MoviePosterActions.style';

export type MoviePosterActionsProps = {
  movie: MovieDetails;
};

const MoviePosterActions = ({ movie }: MoviePosterActionsProps) => (
  <View style={styles.actionsContainer}>
    <View style={sharedStyle.flex1}>
      <Text style={[sharedStyle.title]}>{movie.title} pm</Text>
    </View>

    <View style={styles.iconContainer}>
      <TouchableOpacity style={[styles.actionButton, styles.playButton]}>
        <Icons name="play" size={22} color="#000" />
        <Text style={styles.playText}>Play</Text>
      </TouchableOpacity>

      <FavoriteIcon movie={movie} />
    </View>
  </View>
);

export default MoviePosterActions;
