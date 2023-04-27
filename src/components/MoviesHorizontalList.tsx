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
import { MOVIE_IMAGE_URL, POSTER_ASPECT_RATIO } from '../config/constants';
import { Movie, MovieList } from '../services/movieListService';

const MoviesHorizontalList = ({
  query: { data, isLoading, isError, refetch },
  title,
  onMoviePress,
}: {
  title: string;
  query: UseQueryResult<MovieList, unknown>;
  onMoviePress: (movie: Movie) => void;
}) => {
  const { colors } = useTheme();

  return (
    <View style={{ paddingVertical: 16, gap: 12 }}>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>
          {title}
        </Text>
      </View>
      {isLoading ? (
        <FlatList
          horizontal
          data={new Array(10)}
          renderItem={() => (
            <View
              style={{
                height: 200,
                aspectRatio: POSTER_ASPECT_RATIO,
                backgroundColor: colors.card,
                overflow: 'hidden',
                borderRadius: 12,
              }}
            />
          )}
        />
      ) : isError ? (
        <View
          style={{
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ textAlign: 'center' }}>Something went wrong!</Text>
          <Button title="Retry" onPress={() => refetch()} />
        </View>
      ) : (
        <FlatList
          horizontal
          data={data?.results || []}
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onMoviePress(item)}
              style={{
                overflow: 'hidden',
                borderRadius: 12,
                height: 200,
                aspectRatio: POSTER_ASPECT_RATIO,
                position: 'relative',
                backgroundColor: colors.card,
              }}
            >
              <Image
                source={{
                  uri: `${MOVIE_IMAGE_URL}${item.poster_path}`,
                }}
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

export default MoviesHorizontalList;
