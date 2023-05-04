import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    color: colors.text.primary,
  },
  error: {
    color: colors.error.main,
    padding: 4,
  },
  input: {
    borderBottomColor: colors.primary.main,
    borderBottomWidth: 1,
    paddingVertical: 0,
    marginTop: 5,
    color: colors.text.primary,
  },
  inputError: {
    borderBottomColor: colors.error.main,
  },
});

export default styles;
