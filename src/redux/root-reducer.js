import { combineReducers } from 'redux';

import  closedPokedexReducer from './closedpokedex/closedpokedex.reducer';

const rootReducer = combineReducers({
	closedpokedex: closedPokedexReducer,
});

export default rootReducer;
