import { useTheme } from '@react-navigation/native';
import { UseQueryResult } from '@tanstack/react-query';
import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';

import { Movie, MovieList } from '../../services/movieListService';
import MoviePreview from '../MoviePreview/MoviePreview';
import styles from './HorizontalMovieList.style';

export type HorizontalMovieListProps = UseQueryResult<MovieList, unknown> & {
  title: string;
  onMoviePress: (movie: Movie) => void;
};

const ItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

const HorizontalMovieList = ({
  data,
  isLoading,
  isError,
  refetch,
  title,
  onMoviePress,
}: HorizontalMovieListProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {isLoading && (
        <FlatList
          horizontal
          data={new Array(10)}
          renderItem={() => (
            <View
              style={[
                styles.placeholderMovieContainer,
                { backgroundColor: colors.card },
              ]}
            />
          )}
        />
      )}

      {isError && !isLoading && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Something went wrong!</Text>
          <Button title="Retry" onPress={() => refetch()} />
        </View>
      )}

      {data?.results && (
        <FlatList
          horizontal
          data={data.results}
          contentContainerStyle={styles.contentContainerStyle}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={({ item }) => (
            <MoviePreview onClick={onMoviePress} movie={item} />
          )}
        />
      )}
    </View>
  );
};

export default HorizontalMovieList;
