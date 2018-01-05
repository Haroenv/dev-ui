import { call, put } from 'redux-saga/effects';

import { actions as dependencyActions } from '../ducks/dependencies';
import { actions as packageActions } from '../ducks/packages';
import { getJson } from '../api';

export function* fetchDependencies() {
  const { root, monorepo } = yield call(getJson, '/dependencies');
  yield put(packageActions.setPackages({ root, monorepo }));
  yield put(dependencyActions.setDependencies([root, ...monorepo]));
}
