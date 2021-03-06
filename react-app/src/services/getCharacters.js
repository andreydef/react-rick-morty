const getCharactersFromAPI = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          name: character.name,
          id: character.id,
          img: character.image,
          status: character.status,
          species: character.species,
          gender: character.gender,
          origin: character.origin.name,
          episodes: character.episode.length,
        };
      });
    });
};

export default getCharactersFromAPI;