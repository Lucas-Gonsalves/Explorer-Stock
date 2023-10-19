import styled from "styled-components";


export const Container = styled.button`
  max-width: max-content;
  cursor: pointer;

  background: none;
  border:none;
  

  > :hover {
    transition: .5s;
    filter: brightness(0.9);
  };
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
 
  display: flex;
  align-items: center;
 
  gap: .7rem;
  transition: .5s;

  
  > svg {
    font-size: 1.6rem;
    min-width: 1.6rem;
  };
`;