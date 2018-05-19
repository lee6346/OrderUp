import { combineReducers, Reducer } from 'redux';
import { reducer as form } from 'redux-form';
import geoCoordinatesReducer from './geocoordinates';
import criteriaReducer from './criteria';
import menuReducer from './menu';
import accountReducer from './account';
export default combineReducers({
  form,
  geocoordinates: geoCoordinatesReducer,
  criteria: criteriaReducer,
  menu: menuReducer,
  account: accountReducer,
});
