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

export const selectCurrentPage = createSelector(
  [selectClosedPokedex],
  closedpokedex => closedpokedex.currentPage
);

export const selectItemsPerPage = createSelector(
  [selectClosedPokedex],
  closedpokedex => closedpokedex.itemsPerPage
);

export const selectPageNumbers = createSelector(
  [selectClosedPokedex],
  closedpokedex => closedpokedex.pageNumbers
);

export const selectIndexOfLastPokemon = createSelector(
  [selectClosedPokedex],
  closedpokedex => closedpokedex.indexOfLastPokemon
);

export const selectIndexOfFirstPokemon = createSelector(
  [selectClosedPokedex],
  closedpokedex => closedpokedex.indexOfFirstPokemon
);