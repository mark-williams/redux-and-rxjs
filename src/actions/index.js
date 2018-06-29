const actionTypes = {
  SEARCH_INPUT: 'SEARCH_INPUT',
  SEARCH_ERROR: 'SEARCH_ERROR',
  RETRIEVING: 'RETRIEVING',
  BEERS_RETRIEVED: 'BEERS_RETRIEVED'
};

const searchInput = payload => ({
  type: actionTypes.SEARCH_INPUT,
  payload
});

const retrieving = () => ({
  type: actionTypes.RETRIEVING
});

const searchError = payload => ({
  type: actionTypes.SEARCH_ERROR,
  payload
});

const beersRetrieved = payload => ({
  type: actionTypes.BEERS_RETRIEVED,
  payload
});

export { actionTypes, beersRetrieved, searchInput, retrieving, searchError };
