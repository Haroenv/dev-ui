import { takeLatest, fork } from 'redux-saga/effects';

import { FETCH_SCRIPTS, RUN_SCRIPT } from '../ducks/scripts';
import { fetchScripts, runScript } from './scripts';
import { FETCH_DEPENDENCIES } from '../ducks/dependencies';
import { fetchDependencies } from './dependencies';

export default function* index() {
  yield fork(fetchScripts);
  yield fork(fetchDependencies);
  yield takeLatest(FETCH_SCRIPTS, fetchScripts);
  yield takeLatest(RUN_SCRIPT, runScript);
  yield takeLatest(FETCH_DEPENDENCIES, fetchDependencies);
}
