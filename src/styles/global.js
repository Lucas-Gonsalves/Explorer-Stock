import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  };


  :root {
    font-size: 62.5%;
  };


  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  };

  h1, input {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;