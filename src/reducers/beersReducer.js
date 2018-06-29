import { actionTypes } from '../actions';

const reducer = (state, action) => {
  if (action.type === actionTypes.BEERS_RETRIEVED) {
    return { ...state, beers: action.payload };
  }

  if (action.type === actionTypes.SEARCH_INPUT) {
    return { ...state, searchText: action.payload };
  }

  return state;
};

export default reducer;
