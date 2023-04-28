import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackScreenProps } from '../../../Routes';
import HorizontalMovieList from '../../../components/HorizontalMovieList';
import movieListService, { Movie } from '../../../services/movieListService';
import Banner from '../Banner';
import TopMenu from '../TopMenu';
import styles from './Home.style';

const Home = ({ navigation }: RootStackScreenProps<'Home'>) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const popularMoviesQuery = useQuery(
    ['popular-movies'],
    movieListService.getPopularMoves,
  );

  const nowPlayingMoviesQuery = useQuery(
    ['now-polaying-movies'],
    movieListService.getNowPlayingMovies,
  );

  const upcomingQuery = useQuery(
    ['upcoming-movies'],
    movieListService.getUpcomingMovies,
  );

  const handleMovieClick = (selectedMovie: Movie) => {
    navigation.push('MovieDetails', { movieId: selectedMovie.id });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={[styles.flex1, { backgroundColor: theme.colors.background }]}
      >
        <Banner />

        <HorizontalMovieList
          onMoviePress={handleMovieClick}
          title="Now Playing"
          {...nowPlayingMoviesQuery}
        />

        <HorizontalMovieList
          onMoviePress={handleMovieClick}
          title="Popular"
          {...popularMoviesQuery}
        />

        <HorizontalMovieList
          onMoviePress={handleMovieClick}
          title="Upcoming"
          {...upcomingQuery}
        />

        <View style={{ height: insets.bottom + 16 }} />
      </ScrollView>

      <TopMenu />
    </View>
  );
};

export default Home;
