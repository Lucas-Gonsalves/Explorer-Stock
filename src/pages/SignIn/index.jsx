import { Container, Section, Form, Background, Title } from "./styles";
import { FiMail, FiLock, FiUserPlus } from "react-icons/fi";

import FavIcon from "../../../public/favicon.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {

  return (

    <Container>

      <main>
        <Section>

          <Title>
            <div>
              <h1>Explorer Stock</h1>
              <h2>Faça seu login</h2>
            </div>

            <img src={FavIcon} alt="Caixote de papelão" />
          </Title>
          

          <Form>

            <Input 
              type="email"
              icon={FiMail}
              placeholder="E-mail"
              autoComplete="email"
            />

            <Input 
              type="password"
              icon={FiLock}
              placeholder="Password"
              autoComplete="current-password"
            />

            <Button 
              title="Entrar"
            />

          </Form>

          <ButtonText
            icon={FiUserPlus}
            title="Criar conta"
          />


        </Section>
      </main>

      <Background>
        <p>
          <span>Copyright ©</span> <strong>2023,</strong> ALL RIGHTS RESERVED
        </p>
      </Background>

    </Container>

  );
};