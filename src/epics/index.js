import { combineEpics } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';

const loadBeersEpic = action$ => {
  return action$.ofType('BEERS_RETRIEVED').pipe(
    // eslint-disable-next-line
    tap(x => console.log('ACTION', x)),
    ignoreElements()
  );
};

export default combineEpics(loadBeersEpic);
