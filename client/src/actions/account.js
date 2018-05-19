import { UNAUTHENTICATE, AUTH_ERROR, AUTH_SUCCESS, UPDATE_ACCOUNT_SUCCESS } from '../constants/action-types';
import * as Requests from '../services/requests';

export const uploadFiles = files => async dispatch => {
  try {
    const data = await Requests.awsS3Upload(files);
    dispatch({ type: UPDATE_ACCOUNT_SUCCESS, payload: data });
  } catch (error) {
    console.log('error uploading file:');
    console.log(error);
  }
};

export const createAccount = (input, history) => async dispatch => {
  try {
    const data = await Requests.createAccount(input);

    dispatch({ type: AUTH_SUCCESS, payload: data });
    localStorage.setItem('orderUpToken', data.token);
    history.push('/home');
  } catch (error) {
    dispatch(authError('bad login'));
  }
};

export const login = (input, history) => async dispatch => {
  try {
    let data = await Requests.login(input);
    console.log(data);
    localStorage.setItem('orderUpToken', data.token);
    dispatch({ type: AUTH_SUCCESS, payload: data });

    history.push('/home');
  } catch (error) {
    dispatch(authError('bad login'));
  }
};

export const fetchUser = () => async dispatch => {
  try {
    let data = await Requests.fetchUser();
    dispatch({ type: UPDATE_ACCOUNT_SUCCESS, payload: data });
  } catch (error) {
    dispatch(authError('failed to fetch user info'));
  }
};

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
