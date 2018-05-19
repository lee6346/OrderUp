import {
  UPDATE_ACCOUNT_SUCCESS,
  UNAUTHENTICATE,
  AUTH_ERROR,
  AUTH_SUCCESS,
  TOKEN_AUTHENTICATE,
} from '../constants/action-types';

const INIT = {
  authenticated: false,
  name: undefined,
  email: undefined,
  imageUrl: undefined,
};

export default function(state = INIT, action) {
  switch (action.type) {
    case UPDATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case AUTH_SUCCESS:
      return {
        ...action.payload,
        authenticated: true,
      };
    case TOKEN_AUTHENTICATE:
      return {
        ...state,
        authenticated: true,
      };
    case UNAUTHENTICATE:
      return INIT;
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
