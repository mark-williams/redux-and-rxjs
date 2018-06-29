import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { tap, switchMap, map } from 'rxjs/operators';
import { actionTypes } from '../actions';

const searchApiRoot = 'https://api.punkapi.com/v2/beers?beer_name=';

const loadBeersEpic = action$ => {
  return action$.ofType(actionTypes.SEARCH_INPUT).pipe(
    // eslint-disable-next-line
    tap(x => console.log('ACTION', x)),
    switchMap(action => {
      return ajax.getJSON(searchApiRoot + action.payload).pipe(
        map(x => ({
          type: actionTypes.BEERS_RETRIEVED,
          payload: x
        }))
      );
    })
  );
};

export default combineEpics(loadBeersEpic);
