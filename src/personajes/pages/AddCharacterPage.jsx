import { Paper, VFlow, Heading } from 'bold-ui'
import React from 'react'
import { AddCharacter } from '../components/AddCharacter'
import { PrototipoLayout } from '../layout/PrototipoLayout'

export const AddCharacterPage = () => {
  return (
    <PrototipoLayout>
      <Heading level={1} color='primary'>
        Add a character
      </Heading>
      <hr />
      <AddCharacter />
    </PrototipoLayout>

  )
}
