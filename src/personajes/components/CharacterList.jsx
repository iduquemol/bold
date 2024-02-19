import { CharacterCard } from './';
import { getCharactersByHouse } from '../helpers'

export const CharacterList = ({ house }) => {
    const characters = getCharactersByHouse( house );
  
    return (
    <div>
        {
            characters.map( character => (
                <CharacterCard
                    key={ character.id }
                    { ...character }
                />
            ))
        }
    </div>
  )
}
