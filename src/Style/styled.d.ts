import 'styled-components';

declare module 'styled-components' {
  export interface ThemeInterface {
    colors: {
      primary: string;
    };
  }
}
