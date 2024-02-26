import { useNavigate } from 'react-router-dom'
import { Button, VFlow, Heading } from 'bold-ui'
import { CharacterList } from '../components';
import { ButtonGr } from '../../ui';
import { PrototipoLayout } from '../layout/PrototipoLayout'

export const TargaryenPage = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <PrototipoLayout>
        <Heading level={1} color='primary'>
          Targaryen House
        </Heading>
        <hr />
        <CharacterList house='Targaryen' />
      </PrototipoLayout>
      
    </>
    
  )
}
