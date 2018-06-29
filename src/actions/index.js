const actionTypes = {
  SEARCH_INPUT: 'SEARCH_INPUT',
  SEARCH_ERROR: 'SEARCH_ERROR',
  BEERS_RETRIEVED: 'BEERS_RETRIEVED'
};

const searchInput = payload => ({
  type: actionTypes.SEARCH_INPUT,
  payload
});

const searchError = payload => ({
  type: actionTypes.SEARCH_ERROR,
  payload
});

const beersRetrieved = payload => ({
  type: actionTypes.BEERS_RETRIEVED,
  payload
});

export { actionTypes, beersRetrieved, searchInput, searchError };
