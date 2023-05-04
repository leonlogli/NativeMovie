import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.action.selected,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    flexDirection: 'row',
    gap: 4,
  },
});

export default styles;
