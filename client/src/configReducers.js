import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import caterSearchReducer from './cater-search/reducers';
import authReducer from './auth/reducers';
import userReducer from './user/reducers';
import { UNAUTHENTICATE } from './auth/actions/types';

export const logger = store => next => action => {
  console.log(`action: type=${action.type}, payload:`);
  console.log(action.payload);
  let result = next(action);
  return result;
};

const appReducer = combineReducers({
  form,
  caterSearch: caterSearchReducer,
  user: userReducer,
  auth: authReducer,
});

export default (state, action) => {
  if (action.type === UNAUTHENTICATE) {
    state = undefined;
  }
  return appReducer(state, action);
};
