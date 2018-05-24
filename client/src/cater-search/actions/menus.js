import { RETRIEVE_MENUS_ERROR, RETRIEVE_MENUS_SUCCESS } from './types';
import { getGeoCode, getMenus } from '../apis';

export const retrieveMenus = options => async dispatch => {
  if (options.address) {
    const { lat, lng } = await getGeoCode(options.address);
    options = { ...options, lat, lng };
  }
  const token = localStorage.getItem('orderUpToken');
  try {
    const data = await getMenus(options, token);
    dispatch(retrieveMenusSuccess(data));
  } catch (error) {
    dispatch(retrieveMenusError('Failed to retrieve menus'));
  }
};

const retrieveMenusSuccess = payload => ({
  type: RETRIEVE_MENUS_SUCCESS,
  payload,
});

const retrieveMenusError = payload => ({
  type: RETRIEVE_MENUS_ERROR,
  payload,
});
