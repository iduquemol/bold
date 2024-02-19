import { Paper, VFlow, Heading } from 'bold-ui'
import React from 'react'
import { AddCharacter } from '../components/AddCharacter'

export const AddCharacterPage = () => {
  return (
    <VFlow
        vSpacing={1}
    >
    <Paper
        elevation={20}
        style={{
          marginBottom: '2rem',
          marginTop: '0.5rem',
          padding: '1rem'
        }}        
    >
         <Heading 
          level={1}
          color='normal'          
          >
          Add a character
        </Heading>
        <AddCharacter />
    </Paper>    
    </VFlow>
  )
}
