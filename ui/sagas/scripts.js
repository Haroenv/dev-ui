import { call } from 'redux-saga/effects';

import { actions } from '../ducks/scripts';
import { getStream } from '../api';
import { streamToDispatch } from './utils';

export function* runScript({ name }) {
  const reader = yield call(getStream, `/scripts/run/${name}`);
  yield* streamToDispatch(reader, actions.scriptLogAppend);
}
