import { AUTH_ERROR, AUTH_SUCCESS, UNAUTHENTICATE } from './types';
import * as Requests from '../apis';

export const login = (input, history) => async dispatch => {
  try {
    let token = await Requests.login(input);
    localStorage.setItem('orderUpToken', token);
    dispatch(authSuccess());
    history.push('/home');
  } catch (error) {
    dispatch(authError('bad login'));
  }
};

export const register = (input, history) => async dispatch => {
  try {
    let token = await Requests.register(input);
    localStorage.setItem('orderUpToken', token);
    dispatch(authSuccess());
    history.push('/home');
  } catch (error) {
    dispatch(authError('Failed to register'));
  }
};

export const logout = history => dispatch => {
  localStorage.removeItem('orderUpToken');
  dispatch(unAuthenticate());
  history.push('/');
};

const unAuthenticate = () => ({ type: UNAUTHENTICATE });

const authSuccess = () => ({ type: AUTH_SUCCESS });

const authError = error => ({
  type: AUTH_ERROR,
  payload: error,
});
