import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.default,
    borderRadius: 10,
    width: '45%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingVertical: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default styles;
