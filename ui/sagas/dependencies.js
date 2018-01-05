import { call } from 'redux-saga/effects';

import { actions } from '../ducks/scripts';
import { getStream } from '../api';
import { streamToDispatch } from './utils';

export function* removeDependency({ name }) {
  const reader = yield call(getStream, `/dependencies/remove/${name}`);
  yield* streamToDispatch(reader, actions.scriptLogAppend);
}
