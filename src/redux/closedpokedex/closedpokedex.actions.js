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

export const setPageNumbers = value => ({
  type: ClosedPokedexActionTypes.SET_PAGENUMBER_ACTION,
  payload: value
});

export const setCurrentPage = value => ({
  type: ClosedPokedexActionTypes.SET_CURRENTPAGE_ACTION,
  payload: value
});

export const fetchDataStartAsync = () => {
  return dispatch => {
    dispatch(fetchDataStart());

    axios
      .get(POKEMON_API_URL)
      .then(res => {
        const apiData = res.data.pokemon_entries;
        dispatch(fetchDataSuccess(apiData));
      })
      .catch(error => dispatch(fetchDataFailure(error.message)));
  };
};
