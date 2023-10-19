import { Container, Content } from "./styles";


export function ButtonText({ icon: Icon, title, }) {
  return ( 

  <Container>
    <Content>

      {
        Icon && <Icon /> 
      }

      <p>{ title }</p>

    </Content>
  </Container>
  );
};