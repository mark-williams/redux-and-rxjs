import { createStore } from 'redux';
import beersReducer from '../reducers/beersReducer';

const initialState = {
  beers: []
};

const store = createStore(
  beersReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
