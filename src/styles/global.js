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
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  };

  input, button {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;

    transition: .5s;
  }

  button:hover {
    transition: .5s;
    filter: brightness(0.9);
  };
`;