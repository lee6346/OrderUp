import {
  UPDATE_COORDINATES_ERROR,
  UPDATE_COORDINATES_SUCCESS,
  RETRIEVE_MENUS_ERROR,
  RETRIEVE_MENUS_SUCCESS,
  SHOW_ADVANCED_FILTERS,
  UPDATE_FILTERS,
  SET_KEYWORDS,
} from './types';
import { getCurrentCoordinates, getGeoCode, getMenus } from '../apis';
import { DEFAULT_COORDINATES } from '../constants';

export const updateSearch = options => async dispatch => {
  dispatch(updateFilters(options));
  try {
    const token = localStorage.getItem('orderUpToken');
    const data = await getMenus({ ...options }, token);

    dispatch(retrieveMenusSuccess(data));
  } catch (error) {
    dispatch(retrieveMenusError('Failed to retrieve menus'));
  }
};

export const changeMenuPage = options => async dispatch => {
  try {
    const token = localStorage.getItem('orderUpToken');
    const data = await getMenus({ ...options }, token);

    dispatch(retrieveMenusSuccess(data));
  } catch (error) {
    dispatch(retrieveMenusError('Failed to retrieve menus'));
  }
};

export const useCurrentCoordinates = options => async dispatch => {
  console.log({ ...options });
  let coordinates;
  try {
    coordinates = await getCurrentCoordinates();
  } catch (error) {
    coordinates = DEFAULT_COORDINATES;
  }
  dispatch(updateCoordinates(coordinates));
  try {
    const token = localStorage.getItem('orderUpToken');
    const data = await getMenus({ ...options, ...coordinates }, token);
    dispatch(retrieveMenusSuccess(data));
  } catch (error) {
    dispatch(retrieveMenusError('Failed to retrieve menus'));
  }
};

export const getAddressGeocode = (address, options) => async dispatch => {
  try {
    const coordinates = await getGeoCode(address);
    dispatch(updateCoordinates(coordinates));
    try {
      const token = localStorage.getItem('orderUpToken');
      const data = await getMenus({ ...options, ...coordinates }, token);
      dispatch(retrieveMenusSuccess(data));
    } catch (error) {
      dispatch(retrieveMenusError('Failed to retrieve menus'));
    }
  } catch (error) {
    dispatch(updateCoordinatesError('Invalid Address'));
  }
};
export const setKeywords = keywords => ({
  type: SET_KEYWORDS,
  payload: keywords,
});

export const showAdvancedFilters = show => ({
  type: SHOW_ADVANCED_FILTERS,
  payload: show,
});

const updateFilters = filters => ({
  type: UPDATE_FILTERS,
  payload: filters,
});

const updateCoordinatesError = message => ({
  type: UPDATE_COORDINATES_ERROR,
  payload: message,
});

const updateCoordinates = payload => ({
  type: UPDATE_COORDINATES_SUCCESS,
  payload,
});

const retrieveMenusSuccess = payload => ({
  type: RETRIEVE_MENUS_SUCCESS,
  payload,
});

const retrieveMenusError = payload => ({
  type: RETRIEVE_MENUS_ERROR,
  payload,
});
