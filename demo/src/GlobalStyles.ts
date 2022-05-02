import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;

    * {
      box-sizing: border-box;
    }
  }

  body {
    margin: 0;
    font-family: system-ui;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input {
    font-size: 100%;
    font-family: system-ui;
  }
`;
