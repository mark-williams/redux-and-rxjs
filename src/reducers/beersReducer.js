import { actionTypes } from '../actions';

const reducer = (state, action) => {
  if (action.type === actionTypes.BEERS_RETRIEVED) {
    return { ...state, beers: action.payload, loading: false };
  }

  if (action.type === actionTypes.SEARCH_INPUT) {
    return { ...state, searchText: action.payload, beers: [], loading: true };
  }

  if (action.type === actionTypes.SEARCH_ERROR) {
    return { ...state, searchError: action.payload };
  }

  return state;
};

export default reducer;
