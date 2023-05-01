import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import FavoriteIcon from '../../../components/FavoriteIcon';
import sharedStyle from '../../../utils/sharedStyle';
import styles from './MoviePosterActions.style';

const MoviePosterActions = () => (
  <View style={styles.actionsContainer}>
    <Text style={sharedStyle.title}>Movie Title</Text>

    <View style={styles.flex1} />

    <TouchableOpacity style={[styles.actionButton, styles.playButton]}>
      <Icons name="play" size={22} color="#000" />
      <Text style={styles.playText}>Play</Text>
    </TouchableOpacity>

    <FavoriteIcon />
  </View>
);

export default MoviePosterActions;
