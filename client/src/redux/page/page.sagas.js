import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertPagesSnapshotToMap
} from '../../firebase/firebase.utils';

import {
  fetchPagesSuccess,
  fetchPagesFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchPagesAsync() {
  try {
    const collectionRef = firestore.collection('pages');
    const snapshot = yield collectionRef.get();
    const pagesMap = yield call(
      convertPagesSnapshotToMap,
      snapshot
    );
    yield put(fetchPagesSuccess(pagesMap));
  } catch (error) {
    yield put(fetchPagesFailure(error.message));
  }
}

export function* fetchPagesStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_PAGES_START,
    fetchPagesAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchPagesStart)]);
}
