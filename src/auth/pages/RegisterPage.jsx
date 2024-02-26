import { Link as RouterLink } from 'react-router-dom';
import { Button, VFlow, Heading, HFlow, InfoLabel, Grid, Cell, TextField, Paper, Icon, Text, Link } from "bold-ui"
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContextJs";
import { LoginComponent } from "../components/LoginComp";

export const RegisterPage = () => {

  // const { login } = useContext( AuthContext );
  // const navigate = useNavigate();

  const onLogin = () => {
    login('Ivan Duque');

    navigate('/', {
      replace: true
    });
  }

  return (
    <Grid
      gap={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh', backgroundColor: '#DBF6F2', padding: 4 }}
      wrap
    >
      <Paper
        elevation={20}
        style={{
          marginBottom: '2rem',
          marginTop: '0.5rem',
          padding: '1rem',
          backgroundColor: 'white'
        }}
      >
        <Cell xs={12}>
          <Heading
            level={4}
            style={{ marginBottom: 1 }}
            color="normal"
          >
            Crear Cuenta
          </Heading>
        </Cell>
        <form >
          <Grid wrap>
          <Cell xs={12}>
              <TextField
                name='name'
                label='Full Name'
                placeholder='Full name'

              />
            </Cell>
            <Cell xs={12}>
              <TextField
                name='user'
                label='User'
                placeholder='Enter user'

              />
            </Cell>
            <Cell xs={12}>
              <TextField
                name='password'
                label='Password'
                placeholder='Enter password'
                type='password'

              />
            </Cell>
            <Cell xs={12}>
              <HFlow justifyContent='flex-end'>
                <Button type='submit' kind='primary' skin='default' >
                  Crear Cuenta
                </Button>                
              </HFlow>
            </Cell>
            <Cell xs={12}>
              <HFlow justifyContent='flex-end'>
                <Link color='inherit'
                      component={ RouterLink } 
                      href='/auth/login'  
                      target='_blank'                                   
                >
                  Ya tienes cuenta?
                </Link>
              </HFlow>
            </Cell>
          </Grid>
        </form>


      </Paper>
      {/* <HFlow>
        <Button kind="primary">My custom theme!</Button>
      </HFlow> */}

    </Grid>


  )
}

