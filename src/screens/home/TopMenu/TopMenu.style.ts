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
  title: {
    color: colors.primary.main,
    fontWeight: '600',
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 16,
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 30,
    backgroundColor: colors.action.selected,
  },
  buttonText: {
    color: colors.text.primary,
    fontWeight: '600',
  },
  avatarContainer: {
    backgroundColor: colors.action.selected,
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
});

export default styles;
