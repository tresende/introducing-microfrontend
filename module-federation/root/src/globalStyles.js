import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html{
      font-family: Arial, Helvetica, sans-serif;
    }

    #main{
      padding: 1rem;
      margin: 1rem;
      border: 2px dashed lightgrey;
    }

    input{
      width: 97%;
      padding: 12px 20px;
    }
`;

export default GlobalStyle;
