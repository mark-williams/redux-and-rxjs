import { combineEpics } from 'redux-observable';
import { throwError, of, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  tap,
  switchMap,
  map,
  debounceTime,
  catchError,
  filter
} from 'rxjs/operators';
import {
  actionTypes,
  beersRetrieved,
  searchError,
  retrieving
} from '../actions';

const searchApiRoot = 'https://api.punkapi.com/v2/beers?beer_name=';
const getSearchUrl = searchTerm => `${searchApiRoot}${searchTerm}`;
const ajaxCall = searchTerm => {
  if (searchTerm === 'error') {
    return throwError('Error!!!!');
  }
  return ajax.getJSON(getSearchUrl(searchTerm));
};

const loadBeersEpic = action$ => {
  return action$.ofType(actionTypes.SEARCH_INPUT).pipe(
    debounceTime(300),
    filter(action => action.payload.length),
    // eslint-disable-next-line
    tap(x => console.log('ACTION', x)),
    switchMap(action => {
      const retrieve = of(retrieving());
      const request = ajaxCall(action.payload).pipe(
        map(results => beersRetrieved(results)),
        catchError(err => of(searchError(err)))
      );

      return concat(retrieve, request);
    })
  );
};

export default combineEpics(loadBeersEpic);
