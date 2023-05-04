import { StyleSheet } from 'react-native';
import colors from './colors';

const sharedStyle = StyleSheet.create({
  flex1: { flex: 1 },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default sharedStyle;
