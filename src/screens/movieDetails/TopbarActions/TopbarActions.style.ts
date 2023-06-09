import { StyleSheet } from 'react-native';

import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 52,
    gap: 16,
  },
  backButtonContainer: {
    backgroundColor: colors.action.selected,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    flexDirection: 'row',
    gap: 4,
  },
  castButtonContainer: {
    backgroundColor: colors.action.selected,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    flexDirection: 'row',
    gap: 4,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  flex: {
    flexDirection: 'row',
    gap: 16,
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default styles;
