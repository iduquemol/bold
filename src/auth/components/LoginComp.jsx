import { useNavigate } from 'react-router-dom'
import { Button, Cell, Grid, Paper, TextField } from 'bold-ui'
import React, { useState } from 'react'

export const LoginComponent = () => {
    const navigate = useNavigate();
    const items = ['Stark', 'Lannister', 'Targaryen']
    const [formState, setFormState] = useState({
        user: '',
        password: ''       
      })

    const onReset = () => {
        navigate('/stark', {
          replace: true
        });
      }
      
  
    return (
        <>
        <Paper  
           elevation={20}
           style={{
             marginBottom: '2rem',
             marginTop: '0.5rem',
             padding: '1rem'
           }}
        >
        
        <form >
        <Grid wrap>
          <Cell xs={6}>
            <TextField
              name='user'
              label='User'
              placeholder='Enter user'
              
            />
          </Cell>
          <Cell xs={6}>
            <TextField
              name='password'
              label='Password'
              placeholder='Enter password'
              type='password'
              
            />
          </Cell>
        </Grid>
      </form>
      </Paper>
    </>
  )
}
