import { Container, Form } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";


export function SignIn() {

  return (

    <Container>

      <main>

        <h1>Faça seu login</h1>

        <Form>

          <Input 
            icon={FiMail}
            placeholder="E-mail"
          />

          <Input 
            icon={FiLock}
            placeholder="Password"
          />

        </Form>

      </main>
    </Container>
  );
};