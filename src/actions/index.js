const BEERS_RETRIEVED = 'BEERS_RETRIEVED';

const beersRetrieved = payload => ({ type: BEERS_RETRIEVED, payload });

export { BEERS_RETRIEVED, beersRetrieved };
