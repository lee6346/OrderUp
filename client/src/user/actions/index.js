import { UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, RETRIEVE_USER_SUCCESS, RETRIEVE_USER_ERROR } from './types';
import * as Requests from '../apis';

export const uploadFiles = files => async dispatch => {
  try {
    const data = await Requests.awsS3Upload(files);
    dispatch(updateUserSuccess(data));
  } catch (error) {
    dispatch(updateUserError('error updating user info'));
  }
};

export const fetchUser = () => async dispatch => {
  try {
    const token = localStorage.getItem('orderUpToken');
    const data = await Requests.fetchUser(token);
    dispatch(retrieveUserSuccess(data));
  } catch (error) {
    dispatch(retrieveUserError('failed to retrieve user info'));
  }
};

const retrieveUserSuccess = data => ({
  type: RETRIEVE_USER_SUCCESS,
  payload: data,
});

const retrieveUserError = err => ({
  type: RETRIEVE_USER_ERROR,
  payload: err,
});

const updateUserSuccess = data => ({
  type: UPDATE_USER_SUCCESS,
  payload: data,
});

const updateUserError = err => ({
  type: UPDATE_USER_ERROR,
  payload: err,
});
