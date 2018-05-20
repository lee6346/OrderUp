import { UPDATE_COORDINATES } from '../constants/action-types';

const INIT = {
  lat: 47.7546398,
  lng: -122.17541779999999,
};

export default (state = INIT, action) => {
  switch (action.type) {
    case UPDATE_COORDINATES:
      console.log('coord updated');
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
