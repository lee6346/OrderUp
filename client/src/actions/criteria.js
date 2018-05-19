import axios from 'axios';
import { SET_DISTANCE, SET_PRICE, SET_SORT } from '../constants/action-types';

export const setDistance = distance => {
  return {
    type: SET_DISTANCE,
    payload: distance,
  };
};

export const setPrice = price => {
  return {
    type: SET_PRICE,
    payload: price,
  };
};

export const setSort = sort => {
  return {
    type: SET_SORT,
    payload: sort,
  };
};
