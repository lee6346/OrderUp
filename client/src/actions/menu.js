import * as Requests from '../services/requests';
import { RETRIEVE_MENUS, UPDATE_COORDINATES } from '../constants/action-types';

export const retrieveMenus = options => async dispatch => {
  if (options.address) {
    const coordinates = await Requests.getGeoCode(options.address);
    options.lat = coordinates.lat;
    options.lng = coordinates.lng;
    dispatch({ type: UPDATE_COORDINATES, payload: coordinates });
  }
  const data = await Requests.retrieveMenus(options);
  dispatch({ type: RETRIEVE_MENUS, payload: data });
};
