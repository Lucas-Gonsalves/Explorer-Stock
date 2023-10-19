import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 4.6rem;

  display: flex;
  align-items: center;

  gap: .8rem;
  padding: 1.2rem;
  border-radius: 1rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN};

  > input {
    width: 100%;

    background: none;
    border: none;
    outline: none;
  };

  > svg {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }; 
`;