import { Button, VFlow, Heading } from 'bold-ui'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CharacterList } from '../components';

export const LannisterPage = () => {
  
  const navigate = useNavigate();
  
  return (
    <>
    <VFlow
      vSpacing={1} 
    >
      <Heading level={1}>
        Lannister House
      </Heading>
      <hr />
      <CharacterList house='Lannister' />
      
    </VFlow>
    
  </>
  )
}
