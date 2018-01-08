import { call, put } from 'redux-saga/effects';

import { actions } from '../ducks/scripts';
import { actions as uiActions } from '../ducks/ui';
import { getStream } from '../api';
import { streamToDispatch } from './utils';

export function* removeDependency({ name }) {
  yield put(uiActions.showTerminal());
  const reader = yield call(getStream, `/dependencies/remove/${name}`);
  yield* streamToDispatch(reader, actions.scriptLogAppend);
}

export function* addDependency({ name }) {
  yield put(uiActions.showTerminal());
  const reader = yield call(getStream, `/dependencies/add/${name}`);
  yield* streamToDispatch(reader, actions.scriptLogAppend);
}
