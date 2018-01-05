import { call, put } from 'redux-saga/effects';

import { actions } from '../ducks/dependencies';
import { getJson } from '../api';

export function* fetchDependencies() {
  const dependencies = yield call(getJson, '/dependencies');
  yield put(actions.setDependencies(dependencies));
}
