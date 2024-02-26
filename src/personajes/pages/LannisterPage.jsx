import { Button, VFlow, Heading } from 'bold-ui'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CharacterList } from '../components';
import { PrototipoLayout } from '../layout/PrototipoLayout'

export const LannisterPage = () => {

  const navigate = useNavigate();

  return (
    <>
      <PrototipoLayout>
        <Heading level={1} color='primary'>
          Lannister House
        </Heading>
        <hr />
        <CharacterList house='Lannister' />
      </PrototipoLayout>

    </>
  )
}
