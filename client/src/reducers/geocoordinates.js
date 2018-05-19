import { UPDATE_COORDINATES } from '../constants/action-types';

const INIT = {
  lat: 47.7546398,
  lng: -122.17541779999999,
};

export default (state = INIT, action) => {
  switch (action.type) {
    case UPDATE_COORDINATES:
      return action.payload;
    default:
      return state;
  }
};
