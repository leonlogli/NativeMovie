import { StyleSheet } from 'react-native';

import { POSTER_ASPECT_RATIO } from '../../config/constants';

const styles = StyleSheet.create({
  movieContainer: {
    overflow: 'hidden',
    borderRadius: 12,
    height: 200,
    aspectRatio: POSTER_ASPECT_RATIO,
    position: 'relative',
  },
});

export default styles;
