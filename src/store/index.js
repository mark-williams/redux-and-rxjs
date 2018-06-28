import { createStore } from 'redux';
import beersReducer from '../reducers/beersReducer';

const initialState = {
  beers: []
};

const store = createStore(beersReducer, initialState);

export default store;
