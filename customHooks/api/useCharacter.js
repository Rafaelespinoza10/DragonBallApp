import { useState, useEffect } from 'react';

export const useCharacters = (initialPage = 1, totalPages = 6) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacters = async (page) => {
    try {
      const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=10`);
      if (!response.ok) {
        throw new Error('Error al obtener datos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      setError(error.message);
      return { items: [] }; 
    }
  };

  const loadAllCharacters = async () => {
    setLoading(true);
    let allCharacters = [];

    for (let page = initialPage; page <= totalPages; page++) {
      const data = await fetchCharacters(page);
      console.log(`Página ${page}:`, data); 
      
      if (data.items && data.items.length > 0) {
        allCharacters = [...allCharacters, ...data.items];

        setCharacters(allCharacters);
      } else {
        break; 
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    loadAllCharacters();
  }, []);

  return { characters, loading, error }
}

