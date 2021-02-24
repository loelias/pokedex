import OpenedPokedexActionTypes from './openedpokedex.types';

const INITIAL_STATE = {
  detailsData: [],
  isHoveringImage: false,
  isFetching: false,
  errorMessage: undefined
};

const openedPokedexReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OpenedPokedexActionTypes.FETCH_DETAILSDATA_START:
      return {
        ...state,
        isFetching: true
      };
    case OpenedPokedexActionTypes.FETCH_DETAILSDATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        detailsData: action.payload
      };
    case OpenedPokedexActionTypes.FETCH_DETAILSDATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case OpenedPokedexActionTypes.SET_ONMOUSEOVER_ACTION:
      return {
        ...state,
        isHoveringImage: action.payload,
      };
    default:
      return state;
  }
};

export default openedPokedexReducer;
