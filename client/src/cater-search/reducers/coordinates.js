import { UPDATE_COORDINATES_ERROR, UPDATE_COORDINATES_SUCCESS } from '../actions/types';

const INIT = {
  lat: undefined,
  lng: undefined,
};

export default (state = INIT, action) => {
  switch (action.type) {
    case UPDATE_COORDINATES_SUCCESS:
      return { ...state, ...action.payload };
    case UPDATE_COORDINATES_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
