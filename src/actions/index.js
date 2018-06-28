const actionTypes = {
  BEERS_RETRIEVED: 'BEERS_RETRIEVED'
};

const beersRetrieved = payload => ({
  type: actionTypes.BEERS_RETRIEVED,
  payload
});

export { actionTypes, beersRetrieved };
