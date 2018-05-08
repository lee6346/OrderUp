import { LOAD_COORDINATES } from '../constants/actionTypes';
export default function(state={}, action){
  switch(action.type){
    case LOAD_COORDINATES:
      return {
        ...state,
        coordinates: action.payload
      };
    default:
      return state
  }
}