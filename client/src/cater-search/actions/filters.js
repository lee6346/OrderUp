import { SET_DISTANCE, SET_SORT, SET_PRICE, SET_KEYWORDS, SET_ADDRESS, SET_FOOD_CATEGORY } from './types';

export const setDistance = distance => ({
  type: SET_DISTANCE,
  payload: distance,
});

export const setPrice = price => ({
  type: SET_PRICE,
  payload: price,
});

export const setSort = sort => ({
  type: SET_SORT,
  payload: sort,
});

export const setKeywords = keywords => ({
  type: SET_KEYWORDS,
  payload: keywords,
});

export const setAddress = address => ({
  type: SET_ADDRESS,
  payload: address,
});

export const setFoodCategory = category => ({
  type: SET_FOOD_CATEGORY,
  payload: category,
});
