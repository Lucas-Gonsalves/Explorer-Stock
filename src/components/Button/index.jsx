import { Container } from "./styles";


export function Button({ type = "submit", title = "Enviar", ...rest }) {

  return (

    <Container
      type={ type }
      { ...rest }
    >

      { title }

    </Container>
  );
};