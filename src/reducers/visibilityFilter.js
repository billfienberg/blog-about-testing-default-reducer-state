import { SET_VISIBILITY_FILTER, VisibilityFilters } from "../actions";
const { SHOW_ALL, SHOW_COMPLETED } = VisibilityFilters;

function visibilityFilter(state = SHOW_COMPLETED, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
