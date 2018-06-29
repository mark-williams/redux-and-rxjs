const actionTypes = {
  SEARCH_INPUT: 'SEARCH_INPUT',
  BEERS_RETRIEVED: 'BEERS_RETRIEVED'
};

const searchInput = payload => ({
  type: actionTypes.SEARCH_INPUT,
  payload
});

const beersRetrieved = payload => ({
  type: actionTypes.BEERS_RETRIEVED,
  payload
});

export { actionTypes, beersRetrieved, searchInput };
