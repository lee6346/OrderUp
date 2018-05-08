import { AUTHENTICATE, UNAUTHENTICATE, AUTH_ERROR } from '../constants/actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        authenticated: true,
        error: ''
      };
    case UNAUTHENTICATE:
      return {
        ...state,
        authenticated: false
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
