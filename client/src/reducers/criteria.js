import { SET_DISTANCE, SET_PRICE, SET_SORT } from '../constants/action-types';

const INIT = {
  sort: 'distance',
  distance: 10000,
  price: 50,
};

export default (state = INIT, action) => {
  switch (action.type) {
    case SET_SORT:
      return { sort: action.payload, ...state };
    case SET_PRICE:
      return {
        price: action.payload,
        ...state,
      };
    case SET_DISTANCE:
      return {
        distance: action.payload,
        ...state,
      };
    default:
      return state;
  }
};
