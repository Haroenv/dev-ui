import { call, put } from 'redux-saga/effects';

export function* streamToDispatch(reader, actionCreator) {
  while (true) {
    const result = yield call([reader, reader.read]);
    if (result.done) break;
    const text = String.fromCodePoint(...result.value);
    yield put(actionCreator(text));
  }
}
