import initialFiltersState from '../states/visibility-filter';
import { actionTypes } from '../actions/visibility-filter';

function visibilityFilter(state = initialFiltersState, action) {
  switch (action.type) {
    case actionTypes.SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}

export default visibilityFilter;
