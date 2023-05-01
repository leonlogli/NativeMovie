import { StyleSheet } from 'react-native';

import { POSTER_ASPECT_RATIO } from '../../config/constants';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    gap: 12,
  },
  titleContainer: {
    paddingHorizontal: 16,
  },
  placeholderMovieContainer: {
    height: 200,
    aspectRatio: POSTER_ASPECT_RATIO,
    overflow: 'hidden',
    borderRadius: 12,
  },
  errorContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    textAlign: 'center',
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
  itemSeparator: { width: 12 },
});

export default styles;
