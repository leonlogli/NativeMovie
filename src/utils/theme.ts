import { DarkTheme } from '@react-navigation/native';
import colors from './colors';

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background.default,
    card: colors.background.paper,
  },
};

export default theme;
