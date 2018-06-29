import { actionTypes } from '../actions';

const initialState = {
  searchText: '',
  searchError: '',
  loading: false
};

const search = (state = initialState, { type, payload }) => {
  if (type === actionTypes.BEERS_RETRIEVED) {
    return { ...state, loading: false, searchError: '' };
  }

  if (type === actionTypes.SEARCH_INPUT) {
    return { ...state, searchText: payload, loading: true };
  }

  if (type === actionTypes.SEARCH_ERROR) {
    return { ...state, searchError: 'Error retrieving data' };
  }

  return state;
};

export default search;
