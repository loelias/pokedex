import ClosedPokedexActionTypes from './closedpokedex.types';

import axios from 'axios';

const POKEMON_API_URL = `https://pokeapi.co/api/v2/pokedex/1`;

export const fetchDataStart = () => ({
  type: ClosedPokedexActionTypes.FETCH_DATA_START
});

export const fetchDataSuccess = dataMap => ({
  type: ClosedPokedexActionTypes.FETCH_DATA_SUCCESS,
  payload: dataMap
});

export const fetchDataFailure = errorMessage => ({
  type: ClosedPokedexActionTypes.FETCH_DATA_FAILURE,
  payload: errorMessage
});

export const fetchDataStartAsync = () => {
  return dispatch => {
    dispatch(fetchDataStart());

    axios
    	.get(`https://pokeapi.co/api/v2/pokedex/1`)
			.then( res => {
				const apiData = res.data.pokemon_entries;
				dispatch(fetchDataSuccess(apiData));
			})
			.catch(error => dispatch(fetchDataFailure(error.message)));
  };
};
