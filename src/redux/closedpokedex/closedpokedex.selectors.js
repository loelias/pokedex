import { createSelector } from 'reselect';

const selectClosedPokedex = state => state.closedpokedex;

export const selectData = createSelector(
  [selectClosedPokedex],
  closedpokedex => closedpokedex.data
);

export const selectIsDataFetching = createSelector(
  [selectClosedPokedex],
  closedpokedex => closedpokedex.isFetching
);

export const selectIsDataLoaded = createSelector(
  [selectClosedPokedex],
  closedpokedex => !!closedpokedex.data
);
