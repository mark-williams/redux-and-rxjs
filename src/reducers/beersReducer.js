import { actionTypes } from '../actions';

const reducer = (state, action) => {
  if (action.type === actionTypes.BEERS_RETRIEVED) {
    return { ...state, beers: action.payload };
  }

  return state;
};

export default reducer;
