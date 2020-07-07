import PageActionTypes from './page.types';

const INITIAL_STATE = {
  pages: null,
  isFetching: false,
  errorMessage: undefined
};

const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PageActionTypes.FETCH_PAGES_START:
      return {
        ...state,
        isFetching: true
      };
    case PageActionTypes.FETCH_PAGES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pages: action.payload
      };
    case PageActionTypes.FETCH_PAGES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default pageReducer;
