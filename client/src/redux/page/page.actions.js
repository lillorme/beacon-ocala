import PageActionTypes from './page.types';

import {
  firestore,
  convertPagesSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchPagesStart = () => ({
  type: PageActionTypes.FETCH_PAGES_START
});

export const fetchPagesSuccess = pagesMap => ({
  type: PageActionTypes.FETCH_PAGES_SUCCESS,
  payload: pagesMap
});

export const fetchPagesFailure = errorMessage => ({
  type: PageActionTypes.FETCH_PAGES_FAILURE,
  payload: errorMessage
});

export const fetchPagesStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('pages');
    console.log(collectionRef);
    dispatch(fetchPagesStart());

    collectionRef
      .get()
      .then(snapshot => {
        const pagesMap = convertPagesSnapshotToMap(snapshot);
        dispatch(fetchPagesSuccess(pagesMap));
      })
      .catch(error => dispatch(fetchPagesFailure(error.message)));
  };
};
