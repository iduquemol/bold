import { Link as RouterLink } from 'react-router-dom';
import { Button, VFlow, Heading, HFlow, InfoLabel, Grid, Cell, TextField, Paper, Icon, Text, Link } from "bold-ui"
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContextJs";
import { LoginComponent } from "../components/LoginComp";

export const LoginPage = () => {

  // const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const onStarkNavigate = () => {
    navigate('/stark', {
        replace: true
    });
  }

  const onCreateNavigate = () => {
    navigate('/auth/register', {
        replace: true
    });
  }

  return (
    <Grid
      gap={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh', padding: 4, backgroundColor: '#DBF6F2'}}
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
            Login
          </Heading>
        </Cell>
        <form >
          <Grid wrap>
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
                <Button type='submit' kind='primary' skin='default' onClick={onStarkNavigate} >
                  Login
                </Button>
                <Button kind='normal' skin='default' onClick={onCreateNavigate}>
                  <Icon
                    icon="link"
                    size={1.5}
                    style={{ marginRight: '0.5rem' }}
                  />
                  <Text color='inherit'>Registrarse</Text>
                </Button>
              </HFlow>
            </Cell>
            {/* <Cell xs={12}>
              <HFlow justifyContent='flex-end'>
                <Link color='inherit'
                      component={ RouterLink } 
                      href='/auth/register'  
                      target='_blank'                                     
                >
                  Crear una cuenta
                </Link>
              </HFlow>
            </Cell> */}
          </Grid>
        </form>


      </Paper>
      {/* <HFlow>
        <Button kind="primary">My custom theme!</Button>
      </HFlow> */}

    </Grid>


  )
}
