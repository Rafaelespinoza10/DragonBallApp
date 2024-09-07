import { useCharacters } from "../../customHooks/api/useCharacter";
import { FighterCard } from "./FighterCard";

export const FightersList = ( {affiliation = ''} ) => {  
  const { characters, loading, error } = useCharacters(); 

  if (loading) return <p>Cargando personajes...</p>;
  if (error) return <p>Error: {error}</p>;

  const affilitations = Array.isArray(affiliation) ? affiliation : [affiliation];

  const filteredCharacters = characters.filter(character => affilitations.includes(character.affiliation));
  
  return (
    <div className="container mx-auto px-4">
      {filteredCharacters.length === 0 ? (
        <p className="text-center text-gray-500">No se encontraron personajes.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 p-10">
          {filteredCharacters.map(fighter => (
            <FighterCard
              key={fighter.id}
              {...fighter}

              fighter = { fighter }
            />
          ))}
        </div>
      )}
    </div>
  );
};
