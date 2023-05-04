import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    backgroundColor: colors.text.primary,
    paddingHorizontal: 16,
  },
  playText: { color: colors.background.default, fontWeight: '600' },
});

export default styles;
