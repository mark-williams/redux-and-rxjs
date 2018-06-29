import { combineEpics } from 'redux-observable';
import { throwError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { tap, switchMap, map, debounceTime, catchError } from 'rxjs/operators';
import { actionTypes, beersRetrieved, searchError } from '../actions';

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
    // eslint-disable-next-line
    tap(x => console.log('ACTION', x)),
    switchMap(action => {
      return ajaxCall(action.payload).pipe(
        map(results => beersRetrieved(results)),
        catchError(err => of(searchError(err)))
      );
    })
  );
};

export default combineEpics(loadBeersEpic);
