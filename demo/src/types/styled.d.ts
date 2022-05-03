import { CSSProperties } from 'styled-components';

type RequiredCSSProperties = Required<CSSProperties>;

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: RequiredCSSProperties['backgroundColor'];
      secondary: RequiredCSSProperties['color'];
    };
  }
}
