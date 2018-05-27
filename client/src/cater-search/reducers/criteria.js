import { UPDATE_FILTERS, UPDATE_COORDINATES_SUCCESS, SET_KEYWORDS } from '../actions/types';

const INIT = {
  coordinates: {},
  sort: 'distance',
  distance: '',
  price: '',
  keywords: '',
  category: '',
};

export default (state = INIT, action) => {
  switch (action.type) {
    case UPDATE_COORDINATES_SUCCESS:
      return { ...state, coordinates: { lat: action.payload.lat, lng: action.payload.lng } };
    case UPDATE_FILTERS:
      return { ...state, ...action.payload };
    case SET_KEYWORDS:
      return { ...state, keywords: action.payload };
    default:
      return state;
  }
};
