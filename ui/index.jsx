import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { injectGlobal } from 'styled-components';

import 'react-tabs/style/react-tabs.css';
import 'react-select/dist/react-select.css';

injectGlobal`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

import NpmUi from './components/NpmUi';
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
    <NpmUi />
  </Provider>,
  document.querySelector('.npm-ui'),
);
