import { useCharacters } from "../customHooks/api/useCharacter"


export const getCharactersByAfilitation = ( affiliation )=>{
    const { characters } = useCharacters(); 
    console.log(characters);

    return characters.filter (character => character.affiliation === affiliation );
}