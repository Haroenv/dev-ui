import { takeLatest, fork } from 'redux-saga/effects';

import { RUN_SCRIPT } from '../ducks/scripts';
import { SET_SELECTED_PACKAGE } from '../ducks/packages';
import { REMOVE_DEPENDENCY } from '../ducks/dependencies';
import { removeDependency } from './dependencies';
import { runScript } from './scripts';
import { fetchRootPackage, fetchMonoRepoPackage } from './packages';

export default function* index() {
  yield fork(fetchRootPackage);
  yield takeLatest(RUN_SCRIPT, runScript);
  yield takeLatest(SET_SELECTED_PACKAGE, fetchMonoRepoPackage);
  yield takeLatest(REMOVE_DEPENDENCY, removeDependency);
}
