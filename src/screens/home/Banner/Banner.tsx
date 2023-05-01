import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import { MOVIE_IMAGE_URL } from '../../../config/constants';
import movieListService from '../../../services/movieListService';
import styles from './Banner.style';
import FavoriteIcon from '../../../components/FavoriteIcon';

const Banner = () => {
  const nowPlayingMoviesQuery = useQuery(
    ['now-polaying-movies'],
    movieListService.getNowPlayingMovies,
  );

  const theme = useTheme();
  const featuredIndex = useMemo(() => Math.floor(Math.random() * 19), []);

  const featuredMovie = useMemo(
    () =>
      nowPlayingMoviesQuery.isSuccess
        ? nowPlayingMoviesQuery.data.results[featuredIndex]
        : null,
    [nowPlayingMoviesQuery, featuredIndex],
  );

  return (
    <View style={styles.container}>
      {featuredMovie ? (
        <Image
          source={{
            uri: `${MOVIE_IMAGE_URL}/${
              featuredMovie.poster_path || featuredMovie.backdrop_path
            }`,
          }}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      )}
      <LinearGradient
        colors={[theme.colors.background, 'transparent']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradient}
      />
      <View style={[StyleSheet.absoluteFill, styles.buttonContainer]}>
        <View style={styles.flex1} />
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.playButton}>
            <Icons name="play" size={22} color="#000" />
            <Text style={styles.playButtonText}>Play</Text>
          </TouchableOpacity>
          <FavoriteIcon />
        </View>
      </View>
    </View>
  );
};

export default Banner;
