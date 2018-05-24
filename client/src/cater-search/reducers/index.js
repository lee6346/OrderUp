import { combineReducers } from 'redux';

import coordinatesReducer from './coordinates';
import filtersReducer from './filters';
import menusReducer from './menus';
import uiReducer from './ui';

export default combineReducers({
  coordinates: coordinatesReducer,
  filters: filtersReducer,
  menus: menusReducer,
  ui: uiReducer,
});
