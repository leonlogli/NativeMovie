import { StyleSheet } from 'react-native';
import { POSTER_ASPECT_RATIO } from '../../../config/constants';

const styles = StyleSheet.create({
  container: {
    aspectRatio: POSTER_ASPECT_RATIO,
    width: '100%',
    position: 'relative',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  gradient: {
    height: '40%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  infoContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    padding: 16,
    justifyContent: 'flex-end',
  },
  progressBarContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 4,
    position: 'relative',
    marginBottom: 16,
    overflow: 'hidden',
  },
});

export default styles;
