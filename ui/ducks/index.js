import { combineReducers } from 'redux';

import scripts from './scripts';
import dependencies from './dependencies';

export default combineReducers({
  scripts,
  dependencies,
});
