import { RETRIEVE_MENUS, SELECT_MENU } from '../constants/action-types';

const INIT = {
  menus: [],
  offset: 0,
  limit: 10,
  total: 0,
};

export default (state = INIT, action) => {
  switch (action.type) {
    case RETRIEVE_MENUS:
      const { menus, total, offset, limit } = action.payload;
      return {
        menus,
        offset,
        limit,
        total,
      };
    default:
      return state;
  }
};
