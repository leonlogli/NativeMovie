import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    height: 1,
    backgroundColor: colors.divider,
    flex: 1,
  },
  text: {
    fontWeight: '500',
    marginHorizontal: 8,
    color: colors.text.primary,
  },
});
