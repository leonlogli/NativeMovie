import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './MoviePosterActions.style';

const MoviePosterActions = () => (
  <View style={styles.actionsContainer}>
    <TouchableOpacity style={[styles.actionButton, styles.playButton]}>
      <Icons name="play" size={22} color="#000" />
      <Text style={styles.playText}>Play</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.actionButton, styles.addButton]}>
      <Icons name="plus" size={22} color="#fff" />
    </TouchableOpacity>
    <View style={styles.flex1} />
    <TouchableOpacity style={[styles.actionButton, styles.otherButton]}>
      <Icons name="download" size={22} color="#fff" />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.actionButton, styles.otherButton]}>
      <Icons name="dots-horizontal" size={22} color="#fff" />
    </TouchableOpacity>
  </View>
);

export default MoviePosterActions;
