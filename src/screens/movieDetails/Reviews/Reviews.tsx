import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { ID } from '../../../config/api';
import reviewService from '../../../services/reviewService';
import ReviewCard from '../ReviewCard/ReviewCard';
import styles from './Reviews.style';

export type ReviewsProps = {
  movieId: ID;
};

const Reviews = ({ movieId }: ReviewsProps) => {
  const reviewsQuery = useQuery(['getReviews', movieId], ({ queryKey }) =>
    reviewService.getReviews(queryKey[1]),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Reviews</Text>
      </View>
      {reviewsQuery.isLoading ? (
        <ActivityIndicator />
      ) : reviewsQuery.isError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Something went wrong!</Text>
          <Button title="Retry" onPress={() => reviewsQuery.refetch} />
        </View>
      ) : (
        <View style={styles.reviewCardsContainer}>
          {reviewsQuery.data.results?.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </View>
      )}
    </View>
  );
};

export default Reviews;
