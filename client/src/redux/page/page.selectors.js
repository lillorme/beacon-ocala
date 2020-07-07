import { createSelector } from 'reselect';

const selectPage = state => state.pages;

export const selectPages = createSelector(
  [selectPage],
  page => page.pages
);

export const selectPagesForPreview = createSelector(
  [selectPages],
  pages =>
    pages ? Object.keys(pages).map(key => pages[key]) : []
);

export const selectPageUrl = pageUrlParam =>
  createSelector(
    [selectPages],
    pages => (pages ? pages[pageUrlParam] : null)
  );

export const selectIsPageFetching = createSelector(
  [selectPage],
  page => page.isFetching
);

export const selectIsPagesLoaded = createSelector(
  [selectPage],
  page => !!page.pages
);