import fetch from 'isomorphic-fetch';

export const getAll = () => async (dispatch) => {
  const api = await fetch('https://rickandmortyapi.com/api/character');
  const request = await api.json();
  const characters = request.results;
  dispatch ({
    type: 'getCharacters',
    payload: characters
  })
}