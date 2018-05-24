import { SET_DISTANCE, SET_PRICE, SET_SORT, SET_KEYWORDS, SET_ADDRESS, SET_FOOD_CATEGORY } from '../actions/types';

const INIT = {
  sort: 'distance',
  distance: '',
  price: '',
  keywords: '',
  address: '',
  category: '',
};

export default (state = INIT, action) => {
  switch (action.type) {
    case SET_SORT:
      return { ...state, sort: action.payload };
    case SET_PRICE:
      return { ...state, price: action.payload };
    case SET_DISTANCE:
      return { ...state, distance: action.payload };
    case SET_KEYWORDS:
      return { ...state, keywords: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    case SET_FOOD_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};
