import { UPDATE_USER_SUCCESS, RETRIEVE_USER_SUCCESS } from '../actions/types';

const INIT = {
  name: undefined,
  email: undefined,
  imageUrl: undefined,
};

export default function(state = INIT, action) {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
      return { ...state, ...action.payload };
    case RETRIEVE_USER_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
