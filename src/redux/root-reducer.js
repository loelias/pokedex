import { combineReducers } from 'redux';

import closedPokedexReducer from './closedpokedex/closedpokedex.reducer';
import openedPokedexReducer from './openedpokedex/openedpokedex.reducer';

const rootReducer = combineReducers({
	closedpokedex: closedPokedexReducer,
	openedpokedex: openedPokedexReducer,
});

export default rootReducer;
