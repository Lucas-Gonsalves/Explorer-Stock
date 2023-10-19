import { Container, Form } from "./styles";
import { FiMail, FiLock, FiUserPlus } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";


export function SignIn() {

  return (

    <Container>

      <main>

        <h1>Faça seu login</h1>

        <Form>

          <Input 
            icon={FiMail}
            placeholder="E-mail"
            autocomplete="email"
          />

          <Input 
            icon={FiLock}
            placeholder="Password"
            autocomplete="current-password"
          />

          <Button 
            title="Entrar"
          />

        </Form>

        <ButtonText 
          icon={FiUserPlus}
          title="Criar conta"
        />


      </main>
    </Container>
  );
};