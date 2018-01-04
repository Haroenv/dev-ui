import { call, put } from 'redux-saga/effects';

import { actions } from '../ducks/scripts';
import { get } from '../api';

export function* fetchScripts() {
  const { scripts } = yield call(get, '/scripts');
  yield put(actions.setScripts(scripts));
}
