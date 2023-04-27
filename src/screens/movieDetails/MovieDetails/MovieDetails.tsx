import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackScreenProps } from '../../../Routes';
import MoviesHorizontalList from '../../../components/MoviesHorizontalList';
import movieDetailsService from '../../../services/movieDetailsService';
import sharedStyle from '../../../utils/sharedStyle';
import Genres from '../Genres';
import MoviePoster from '../MoviePoster';
import Reviews from '../Reviews';
import TopbarActions from '../TopbarActions';
import styles from './MovieDetails.style';
import { Movie } from '../../../services/movieListService';

const MovieDetails = ({
  navigation,
  route: {
    params: { movieId },
  },
}: RootStackScreenProps<'MovieDetails'>) => {
  const query = useQuery(['getMovie', movieId], ({ queryKey }) =>
    movieDetailsService.getMovie(queryKey[1]),
  );

  const movie = query.data!;

  const recommendationsQuery = useQuery(
    ['getRecommendations', movieId],
    ({ queryKey }) => movieDetailsService.getRecommendations(queryKey[1]),
  );

  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const handleMovieClick = (selectedMovie: Movie) => {
    navigation.push('MovieDetails', { movieId: selectedMovie.id });
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation, query]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {query.isLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : query.isError ? (
        <View />
      ) : (
        <ScrollView style={sharedStyle.flex1}>
          <MoviePoster movie={movie} />

          <Genres movie={movie} />

          <MoviesHorizontalList
            onMoviePress={handleMovieClick}
            title="Recomended Movies"
            query={recommendationsQuery}
          />

          <Reviews movieId={movieId} />
          <View style={{ height: insets.bottom + 16 }} />
        </ScrollView>
      )}

      <TopbarActions onBack={() => navigation.pop()} />
    </View>
  );
};

export default MovieDetails;