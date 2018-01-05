import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';

import DevUi from './components/DevUi';
import reducers from './ducks';
import sagas from './sagas';
import { compose } from 'redux';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <DevUi />
  </Provider>,
  document.querySelector('.dev-ui'),
);
