import { UNAUTHENTICATE, AUTH_ERROR, AUTH_SUCCESS, TOKEN_AUTH } from '../actions/types';

const INIT = {
  authenticated: false,
  error: '',
};

export default function(state = INIT, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { authenticated: true, error: '' };
    case TOKEN_AUTH:
      return { authenticated: true, error: '' };
    case UNAUTHENTICATE:
      return { authenticated: false, error: '' };
    case AUTH_ERROR:
      return { authenticated: false, error: action.payload };
    default:
      return state;
  }
}
