import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth';
import searchReducer from './search';

export default combineReducers({
  form,
  auth: authReducer,
  search: searchReducer,
});
