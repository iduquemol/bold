import { useNavigate } from 'react-router-dom'
import { Button, VFlow, Heading } from 'bold-ui'
import { PrototipoLayout } from '../layout/PrototipoLayout'
import { CharacterList } from '../components';
import { ButtonGr } from '../../ui';

export const StarkPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <PrototipoLayout>
        <Heading level={1} color='primary'>
          Stark House
        </Heading>
        <hr />
        <CharacterList house='Stark' />
      </PrototipoLayout>

    </>

  )
}
