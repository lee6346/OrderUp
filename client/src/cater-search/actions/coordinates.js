import { UPDATE_COORDINATES_ERROR, UPDATE_COORDINATES_SUCCESS } from './types';
import { getCurrentCoordinates, getGeoCode } from '../apis';
import { DEFAULT_COORDINATES } from '../constants';

export const useCurrentCoordinates = () => async dispatch => {
  try {
    const coordinates = await getCurrentCoordinates();
    dispatch(updateCoordinates(coordinates));
  } catch (error) {
    dispatch(updateCoordinates(DEFAULT_COORDINATES));
  }
};

export const getAddressGeocode = address => async dispatch => {
  try {
    const coordinates = await getGeoCode(address);
    dispatch(updateCoordinates(coordinates));
  } catch (error) {
    dispatch(updateCoordinatesError('Invalid Address'));
  }
};

const updateCoordinatesError = message => ({
  type: UPDATE_COORDINATES_ERROR,
  payload: message,
});

const updateCoordinates = payload => ({
  type: UPDATE_COORDINATES_SUCCESS,
  payload,
});
