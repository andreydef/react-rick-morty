export const getCharactersFromAPI = () => {
  return fetch(
    "https://rickandmortyapi.com/api/character"
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
          episodes: character.episode.length
        };
      });
    });
};

export const getLocationsFromAPI = () => {
  return fetch(
    "https://rickandmortyapi.com/api/location"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((location) => {
        return {
          name: location.name,
          id: location.id,
          type: location.type,
          dimension: location.dimension,
          residents: location.residents.length
        };
      });
    });
};

export const getEpisodesFromAPI = () => {
  return fetch(
    "https://rickandmortyapi.com/api/episode"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((result) => {
        return {
          name: result.name,
          id: result.id,
          air_date: result.air_date,
          episode: result.episode,
          characters: result.characters.length
        };
      });
    });
};