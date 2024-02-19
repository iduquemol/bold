import { useNavigate } from 'react-router-dom'
import { Button, VFlow, Heading } from 'bold-ui'
import { CharacterList } from '../components';
import { ButtonGr } from '../../ui';

export const TargaryenPage = () => {
  const navigate = useNavigate();
  
  return (
    <>
      
      <VFlow
        vSpacing={1}  
      >
        <Heading level={1}>
            Targaryen House
        </Heading>
        <hr />
        <CharacterList house='Targaryen' />
                
      </VFlow>
      
    </>
    
  )
}
