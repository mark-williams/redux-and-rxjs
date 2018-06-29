import { actionTypes } from '../actions';

const initialState = {
  searchText: '',
  searchError: '',
  loading: false
};

const search = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.BEERS_RETRIEVED:
      return { ...state, loading: false, searchError: '' };

    case actionTypes.RETRIEVING:
      return { ...state, loading: true, searchError: '' };

    case actionTypes.SEARCH_INPUT:
      return { ...state, searchText: payload };

    case actionTypes.SEARCH_ERROR:
      return { ...state, searchError: 'Error retrieving data' };

    default:
      return state;
  }
};

export default search;
