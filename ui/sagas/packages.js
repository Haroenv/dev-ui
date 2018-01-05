import { call, put } from 'redux-saga/effects';

import { actions as packagesActions } from '../ducks/packages';
import { actions as dependenciesActions } from '../ducks/dependencies';
import { actions as scriptsActions } from '../ducks/scripts';
import { getJson } from '../api';

export function* fetchRootPackage() {
  const { root, monorepo } = yield call(getJson, '/packages');
  yield put(packagesActions.setPackages({ root: root.name, monorepo }));
  yield put(dependenciesActions.setDependencies([root]));
  yield put(
    scriptsActions.setScripts({
      packageName: root.name,
      scripts: root.scripts,
    }),
  );
}

export function* fetchMonoRepoPackage({ name }) {
  const pkg = yield call(getJson, `/packages/monorepo/${name}`);
  yield put(dependenciesActions.setDependencies([pkg]));
  yield put(
    scriptsActions.setScripts({
      packageName: pkg.name,
      scripts: pkg.scripts,
    }),
  );
}
