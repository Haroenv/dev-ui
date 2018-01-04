import { call, put } from 'redux-saga/effects';

import { actions } from '../ducks/dependencies';
import { get } from '../api';

export function* fetchDependencies() {
  const dependencies = yield call(get, '/dependencies');
  yield put(actions.setDependencies(dependencies));
}
