import axios from 'axios';
import { LOAD_COORDINATES } from '../constants/actionTypes';
export const loadCoordinates = () => {
  return function(dispatch) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude: lat, longitude: lng } = position.coords;
        console.log({ lat, lng });
        dispatch({ type: LOAD_COORDINATES, payload: { lat, lng } });
      });
    }
  };
};
