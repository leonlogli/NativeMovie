import { StyleSheet } from 'react-native';

import { vh } from '../../utils/dimensions';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  linearGradient: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: vh * 0.2,
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    color: colors.text.primary,
    fontSize: 31,
    fontWeight: 'bold',
  },
  container: {
    elevation: 10,
    backgroundColor: colors.background.paper,
    borderRadius: 10,
    margin: 10,
    marginTop: -20,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: colors.primary.main,
    textAlign: 'center',
  },
  button: {
    borderRadius: 10,
    width: 160,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    marginTop: 16,
  },
  buttonText: {
    color: colors.text.primary,
    fontSize: 19,
  },
  link: {
    color: colors.primary.main,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default styles;
