import { BEERS_RETRIEVED } from '../actions';

const reducer = (state, action) => {
  if (action.type === BEERS_RETRIEVED) {
    return { ...state, beers: action.payload };
  }

  return state;
};

export default reducer;
