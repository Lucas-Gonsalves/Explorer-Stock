import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 10rem;

  grid-template-areas: 
    "login"
    "footer"
  ;

  > main {
    max-width: 36rem;
    
    margin: auto;
    padding: 2rem;
  };
`;


export const Section = styled.section`
  grid-area: login;


  padding: 5.2rem 3.2rem;
  text-align: center;
  
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  box-shadow: -8px 8px 10px rgba(0, 0, 0, 0.2);
`;


export const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  > button {
    margin-bottom: 3.9rem;
  };
`;


export const Background = styled.footer`
  grid-area: footer;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: 2rem;

  background: ${({ theme }) => `linear-gradient(to top, ${theme.COLORS.PURPLE}, rgba(128, 0, 128, 0))`};

  > p {
    padding-top: 4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_TRANSPARENT};
  };
`;

export const Title = styled.div`

  display: flex;
  justify-content: space-between;

  align-items: start;

  > img {
    width: 5rem;
    height: 5rem;
  }

  > div h1 {
      text-align: start;
      color: ${({ theme }) => theme.COLORS.PURPLE_100};
    };

  > div h2 {
    font-size: 1.8rem;
    text-align: start;

    color: ${({ theme }) => theme.COLORS.GRAY_400};

    margin-bottom: 2.9rem;
    line-height: 3.2rem;
  };
`;