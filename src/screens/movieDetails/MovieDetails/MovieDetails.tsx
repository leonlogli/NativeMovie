import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackScreenProps } from '../../../Routes';
import HorizontalMovieList from '../../../components/HorizontalMovieList';
import movieDetailsService from '../../../services/movieDetailsService';
import { Movie } from '../../../services/movieListService';
import sharedStyle from '../../../utils/sharedStyle';
import Genres from '../Genres';
import MoviePoster from '../MoviePoster';
import Reviews from '../Reviews';
import TopbarActions from '../TopbarActions';
import styles from './MovieDetails.style';

export type MovieDetailsProps = RootStackScreenProps<'MovieDetails'>;

const MovieDetails = ({ navigation, route }: MovieDetailsProps) => {
  const { movieId } = route.params;

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

          <HorizontalMovieList
            onMoviePress={handleMovieClick}
            title="Recomended Movies"
            {...recommendationsQuery}
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
