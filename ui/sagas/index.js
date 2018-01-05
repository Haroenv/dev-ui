import { takeLatest, fork } from 'redux-saga/effects';

import { RUN_SCRIPT } from '../ducks/scripts';
import { SET_SELECTED_PACKAGE } from '../ducks/packages';
import { runScript } from './scripts';
import { fetchRootPackage, fetchMonoRepoPackage } from './packages';

export default function* index() {
  yield fork(fetchRootPackage);
  yield takeLatest(RUN_SCRIPT, runScript);
  yield takeLatest(SET_SELECTED_PACKAGE, fetchMonoRepoPackage);
}
