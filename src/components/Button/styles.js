import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  min-height: 4.6rem;

  font-weight: 700;
  
  padding: 1.2rem;
  border-radius: 1rem;
  border: none;

  background: ${({ theme }) => theme.COLORS.PURPLE};

  cursor: pointer;
`;