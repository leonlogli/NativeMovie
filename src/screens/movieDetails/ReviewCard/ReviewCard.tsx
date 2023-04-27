import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import { MOVIE_IMAGE_URL } from '../../../config/constants';
import { Review } from '../../../services/reviewService';
import styles from './ReviewCard.style';

export type ReviewCardProps = {
  review: Review;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <View style={styles.authorContainer}>
        <View style={styles.authorDetailsContainer}>
          {review.author_details.avatar_path && (
            <Image
              source={{
                uri: `${MOVIE_IMAGE_URL}/${review.author_details.avatar_path}`,
              }}
              resizeMode="cover"
              style={styles.authorAvatar}
            />
          )}
          <Text
            numberOfLines={1}
            style={[styles.authorName, { color: colors.text }]}
          >
            {review.author_details.username}
          </Text>
        </View>
        {review.author_details.rating && (
          <View style={styles.ratingContainer}>
            <Text style={[styles.ratingText, { color: colors.text }]}>
              {review.author_details.rating}/10
            </Text>
            <Icons name="star" size={24} style={styles.starIcon} />
          </View>
        )}
      </View>
      <Text
        style={[styles.contentText, { color: colors.text }]}
        numberOfLines={8}
      >
        {review.content}
      </Text>
    </View>
  );
};

export default ReviewCard;
