import { combineReducers } from 'redux';

import uiReducer from './ui';
import resultsReducer from './results';
import criteriaReducer from './criteria';

export default combineReducers({
  criteria: criteriaReducer,
  results: resultsReducer,
  ui: uiReducer,
});
