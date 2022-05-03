import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
    background-color: ${(props) => props.theme.color.primary};

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

  &::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }
   
  &::-webkit-scrollbar-track {
    background-color: #555;
    border-radius: 8px;
  }
   
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.secondary};
  }
`;
