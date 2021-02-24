import ClosedPokedexActionTypes from './closedpokedex.types';

const INITIAL_STATE = {
  data: [],
  currentPage: 1,
  itemsPerPage: 100,
  pageNumbers: [],
  currentItems: [],
  indexOfLastPokemon: null,
  indexOfFirstPokemon: null,
  isFetching: false,
  errorMessage: undefined
};

const closedPokedexReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClosedPokedexActionTypes.FETCH_DATA_START:
      return {
        ...state,
        isFetching: true
      };
    case ClosedPokedexActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case ClosedPokedexActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case ClosedPokedexActionTypes.SET_PAGENUMBER_ACTION:
      return {
        ...state,
        pageNumbers: action.payload
      };
    case ClosedPokedexActionTypes.SET_CURRENTPAGE_ACTION:
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      return state;
  }
};

export default closedPokedexReducer;
