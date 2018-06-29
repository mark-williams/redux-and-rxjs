import beers from './beersReducer';
import search from './searchReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  beers,
  search
});
