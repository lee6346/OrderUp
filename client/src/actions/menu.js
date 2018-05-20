import { retrieveMenus as retrieveMenusAPI, getGeoCode } from '../services/requests';
import { RETRIEVE_MENUS, UPDATE_COORDINATES } from '../constants/action-types';

export const retrieveMenus = options => async dispatch => {
  if (options.address) {
    const coordinates = await getGeoCode(options.address);
    options.lat = coordinates.lat;
    options.lng = coordinates.lng;
    dispatch({ type: UPDATE_COORDINATES, payload: coordinates });
  }
  const token = localStorage.getItem('orderUpToken');
  const data = await retrieveMenusAPI(options, token);
  dispatch({ type: RETRIEVE_MENUS, payload: data });
};
