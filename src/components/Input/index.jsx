  import { Container } from "./styles.js";


  export function Input({ icon : Icon, type = "text", ...rest }) {

    return(

      <Container>

        {
          Icon && <Icon />
        }

        <input 
          type={ type }
          {...rest}
        />

      </Container>
    );
};