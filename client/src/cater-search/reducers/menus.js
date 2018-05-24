import { RETRIEVE_MENUS_SUCCESS } from '../actions/types';

const INIT = {
  menus: [], //results
  offset: 0,
  limit: 10,
  total: 0,
};

export default (state = INIT, action) => {
  switch (action.type) {
    case RETRIEVE_MENUS_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
