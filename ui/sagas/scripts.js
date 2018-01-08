import { call, put } from 'redux-saga/effects';

import { actions } from '../ducks/scripts';
import { actions as uiActions } from '../ducks/ui';
import { getStream } from '../api';
import { streamToDispatch } from './utils';

export function* runScript({ name }) {
  yield put(uiActions.showTerminal());
  const reader = yield call(getStream, `/scripts/run/${name}`);
  yield* streamToDispatch(reader, actions.scriptLogAppend);
}
