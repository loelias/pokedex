import OpenedPokedexActionTypes from './openedpokedex.types';

import axios from 'axios';

const DETAILS_API_URL = `https://pokeapi.co/api/v2/pokemon/`;

export const fetchDetailsDataStart = () => ({
  type: OpenedPokedexActionTypes.FETCH_DETAILSDATA_START
});

export const fetchDetailsDataSuccess = detailsDataMap => ({
  type: OpenedPokedexActionTypes.FETCH_DETAILSDATA_SUCCESS,
  payload: detailsDataMap
});

export const fetchDetailsDataFailure = errorMessage => ({
  type: OpenedPokedexActionTypes.FETCH_DETAILSDATA_FAILURE,
  payload: errorMessage
});

export const setOnMouseOverImage = value => ({
  type: OpenedPokedexActionTypes.SET_ONMOUSEOVER_ACTION,
  payload: value
})

export const fetchDetailsDataStartAsync = (value) => {
  return dispatch => {
    dispatch(fetchDetailsDataStart());

    axios
      .get(DETAILS_API_URL + value)
		  .then( res => {
			  const apiData = res.data;
			  dispatch(fetchDetailsDataSuccess(apiData));
		  })
		  .catch(error => dispatch(fetchDetailsDataFailure(error.message)));
  };
};
