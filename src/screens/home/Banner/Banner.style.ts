import { StyleSheet } from 'react-native';
import { POSTER_ASPECT_RATIO } from '../../../config/constants';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    aspectRatio: POSTER_ASPECT_RATIO,
    width: '100%',
    position: 'relative',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  gradient: {
    height: '40%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  buttonContainer: {
    zIndex: 2,
    padding: 16,
  },
  buttonGroup: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  favButton: {
    backgroundColor: colors.action.selected,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    flexDirection: 'row',
    gap: 4,
  },
  addButtonText: {
    color: colors.text.primary,
    fontWeight: '600',
  },
  flex1: {
    flex: 1,
  },
});

export default styles;
