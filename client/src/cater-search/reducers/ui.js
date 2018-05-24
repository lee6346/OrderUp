import { SHOW_ADVANCED_FILTERS } from '../actions/types';

const INIT = {
  showFilters: true,
};

export default (state = INIT, action) => {
  switch (action.type) {
    case SHOW_ADVANCED_FILTERS:
      return { ...state, showFilters: action.payload };
    default:
      return state;
  }
};
