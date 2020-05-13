import {DefaultTheme} from 'styled-components';
import colors from './colors';

export const theme: DefaultTheme = {
  colors: {
    primary: colors.purple,
  },
};

export default interface ThemeInterface {
  primaryColor: string;
  primaryColorInverted: string;
}
