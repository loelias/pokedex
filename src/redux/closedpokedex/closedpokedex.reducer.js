import ClosedPokedexActionTypes from './closedpokedex.types';

const INITIAL_STATE = {
  data: [],
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
    default:
      return state;
  }
};

export default closedPokedexReducer;
