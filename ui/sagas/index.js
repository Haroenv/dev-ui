import {takeLatest} from 'redux-saga/effects';

import {types} from '../ducks/scripts';
import {fetchScripts} from './scripts';

export default function* index() {
  yield* fetchScripts();
  takeLatest(types.FETCH_SCRIPTS, fetchScripts);
}
