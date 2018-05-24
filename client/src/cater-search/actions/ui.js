import { SHOW_ADVANCED_FILTERS } from './types';

export const showAdvancedFilters = show => ({
  type: SHOW_ADVANCED_FILTERS,
  payload: show,
});
