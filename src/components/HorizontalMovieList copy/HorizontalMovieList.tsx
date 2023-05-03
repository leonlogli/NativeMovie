import { UseQueryResult } from '@tanstack/react-query';
import React from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { MOVIE_IMAGE_URL } from '../../config/constants';
import { Movie, MovieList } from '../../services/movieListService';
import styles from './HorizontalMovieList.style';

export type HorizontalMovieListProps = UseQueryResult<MovieList, unknown> & {
  title: string;
  onMoviePress: (movie: Movie) => void;
};

const ItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

const HorizontalMovieList = ({
  movies: data,
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
            <TouchableOpacity
              onPress={() => onMoviePress(item)}
              style={[styles.movieContainer, { backgroundColor: colors.card }]}
            >
              <Image
                source={{ uri: `${MOVIE_IMAGE_URL}${item.poster_path}` }}
                style={StyleSheet.absoluteFill}
                resizeMode="cover"
              />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default HorizontalMovieList;
