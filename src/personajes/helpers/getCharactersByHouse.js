
import { characters } from '../data/characters';

export const getCharactersByHouse = ( house ) => {

    const validHouses = ['Stark','Lannister','Targaryen'];
    if (!validHouses.includes( house ))
    {
        throw new Error(`${ publisher } is not a valid house`);
    }

    return characters.filter( character => character.house === house );
}