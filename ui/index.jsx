import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';

import NpmUi from './components/NpmUi';
import reducers from './ducks';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <NpmUi />
  </Provider>,
  document.querySelector('.npm-ui'),
);
