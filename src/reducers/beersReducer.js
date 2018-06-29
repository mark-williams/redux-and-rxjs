import { actionTypes } from '../actions';

const initialState = {
  beers: []
};

const beers = (state = initialState, action) => {
  if (action.type === actionTypes.BEERS_RETRIEVED) {
    return { ...state, beers: action.payload };
  }

  return state;
};

export default beers;
