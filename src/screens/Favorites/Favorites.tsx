import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import MoviePreviewCard from '../../components/MoviePreviewCard';
import { useAuth } from '../../context/AuthProvider';
import { RootStackScreenProps } from '../../navigations';
import favoriteService from '../../services/favoriteService';
import { MoviePreview } from '../../services/movieListService';
import sharedStyle from '../../utils/sharedStyle';
import styles from './Favorites.style';

export type HomeProps = RootStackScreenProps<'Favorites'>;

const Favorites = ({ navigation }: HomeProps) => {
  const { user } = useAuth();

  const { data: movies, isLoading } = useQuery(
    ['getFavoriteMovies', user?.uid],
    ({ queryKey }) => favoriteService.getFavoriteMovies(queryKey[1]),
    { enabled: !!user?.uid },
  );

  const handleMovieClick = (selectedMovie: MoviePreview) => {
    navigation.push('MovieDetails' as any, { movieId: selectedMovie.id });
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={sharedStyle.center}>
          <ActivityIndicator />
        </View>
      )}

      {movies && (
        <FlatList
          data={movies}
          columnWrapperStyle={styles.columnWrapperStyle}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <MoviePreviewCard
              onClick={handleMovieClick}
              movie={item}
              style={styles.movieCard}
            />
          )}
        />
      )}
    </View>
  );
};

export default Favorites;
