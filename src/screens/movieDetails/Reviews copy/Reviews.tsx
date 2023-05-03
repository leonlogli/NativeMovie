import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, ActivityIndicator, Button } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import { MOVIE_IMAGE_URL } from '../../../config/constants';
import reviewService from '../../../services/reviewService';
import { ID } from '../../../config/api';
import { useQuery } from '@tanstack/react-query';

export type ReviewsProps = {
  movieId: ID;
};

const Reviews = ({ movieId }: ReviewsProps) => {
  const { colors } = useTheme();

  const reviewsQuery = useQuery(['getReviews', movieId], ({ queryKey }) =>
    reviewService.getReviews(queryKey[1]),
  );

  return (
    <View style={{ paddingVertical: 16 }}>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>
          Reviews
        </Text>
      </View>
      {reviewsQuery.isLoading ? (
        <ActivityIndicator />
      ) : reviewsQuery.isError ? (
        <View>
          <Text>Something went wrong!</Text>
          <Button title="Retry" onPress={() => reviewsQuery.refetch} />
        </View>
      ) : (
        <View style={{ padding: 16, gap: 16 }}>
          {reviewsQuery.movies.results?.map((review) => (
            <View
              key={review.id}
              style={{
                padding: 16,
                backgroundColor: colors.card,
                borderRadius: 16,
              }}
            >
              <View
                style={{
                  marginBottom: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  {review.author_details.avatar_path && (
                    <Image
                      source={{
                        uri: `${MOVIE_IMAGE_URL}/${review.author_details.avatar_path}`,
                      }}
                      resizeMode="cover"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 100,
                        marginRight: 16,
                      }}
                    />
                  )}
                  <Text
                    numberOfLines={1}
                    style={{
                      color: colors.text,
                      fontSize: 16,
                      fontWeight: '600',
                      flex: 1,
                    }}
                  >
                    {review.author_details.username}
                  </Text>
                </View>
                {review.author_details.rating && (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    <Text
                      style={{
                        color: colors.text,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      {review.author_details.rating}/10
                    </Text>
                    <Icons name="star" size={24} color="#facc15" />
                  </View>
                )}
              </View>
              <Text
                style={{
                  color: colors.text,
                  fontSize: 16,
                  lineHeight: 24,
                }}
                numberOfLines={8}
              >
                {review.content}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Reviews;
