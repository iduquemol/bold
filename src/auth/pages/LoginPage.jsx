import { Button, VFlow, Heading, HFlow, InfoLabel} from "bold-ui"
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContextJs";
import { LoginComponent } from "../components/LoginComp";

export const LoginPage = () => {
  
  const { login } = useContext( AuthContext );
  const navigate = useNavigate();
  
  const onLogin = () => {
    login( 'Ivan Duque' );

    navigate('/', {
      replace: true
    });
  }
  
  return (
    <>
    <HFlow
      alignItems="center"
      justifyContent="center"
    >
      <VFlow
        vSpacing={1}  
      >
        <Heading level={1}>
          Login
        </Heading>
        <Heading level={2}>
          Please enter your username and password
        </Heading>
        {/* <hr /> */}
        <LoginComponent />
        <HFlow justifyContent="flex-end">
        <Button kind='primary' skin='default' onClick={ onLogin }>
          Login
        </Button>
        </HFlow>
                
      </VFlow>
    </HFlow>
    
    
  </>
    
    
  )
}
