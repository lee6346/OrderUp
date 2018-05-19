import { UPDATE_COORDINATES } from '../constants/action-types';
import { getCurrentCoordinates as currentCoordinates } from '../services/requests';

export const getCurrentCoordinates = () => async dispatch => {
  try {
    const coordinates = await currentCoordinates();
    dispatch({ type: UPDATE_COORDINATES, payload: coordinates });
  } catch (error) {
    console.log('not letting use get html coordinates');
  }
};
