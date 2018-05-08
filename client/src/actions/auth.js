import axios from 'axios';
import { UNAUTHENTICATE, AUTH_ERROR, AUTHENTICATE } from '../constants/actionTypes';
import { LOGIN_URL, REGISTER_URL } from '../constants/apis';

export function register({ email, name, password, repassword }, history) {
  return async function(dispatch) {
    try {
      let response = await axios.post(REGISTER_URL, { email, name, password, repassword });
      console.log(response);
      dispatch({ type: AUTHENTICATE, payload: response.data });
      localStorage.setItem('orderUpToken', response.data.token);
      history.push('/home');
    } catch (error) {
      dispatch(authError(error.response.data.error));
    }
  };
}

export function login({ email, password }, history) {
  return async function(dispatch) {
    try {
      let response = await axios.post(LOGIN_URL, { email, password });
      dispatch({ type: AUTHENTICATE });
      localStorage.setItem('orderUpToken', response.data.token);
      history.push('/home');
    } catch (error) {
      dispatch(authError('bad login'));
    }
  };
}

export function logout(history) {
  return function(dispatch) {
    localStorage.removeItem('orderUpToken');
    dispatch({ type: UNAUTHENTICATE });
    history.push('/');
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}
