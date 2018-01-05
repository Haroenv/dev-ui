import { combineReducers } from 'redux';

import scripts from './scripts';
import packages from './packages';
import dependencies from './dependencies';

export default combineReducers({
  scripts,
  packages,
  dependencies,
});
