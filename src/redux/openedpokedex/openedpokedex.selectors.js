import { createSelector } from 'reselect';

const selectOpenedPokedex = state => state.openedpokedex;

export const selectDetailsData = createSelector(
  [selectOpenedPokedex],
  openedpokedex => openedpokedex.detailsData
);

export const selectIsDetailsDataFetching = createSelector(
  [selectOpenedPokedex],
  openedpokedex => openedpokedex.isFetching
);

export const selectIsDetailsDataLoaded = createSelector(
  [selectOpenedPokedex],
  openedpokedex => !!openedpokedex.detailsData
);

export const selectIsHoveringImage = createSelector(
  [selectOpenedPokedex],
  openedpokedex => openedpokedex.isHoveringImage
);