import { CSSProperties } from 'styled-components';

type RequiredCSSProperties = Required<CSSProperties>;

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: RequiredCSSProperties['color'];
      secondary: RequiredCSSProperties['color'];
      secondary25: RequiredCSSProperties['color'];
    };
  }
}
