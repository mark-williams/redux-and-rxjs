import { combineEpics } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs/operators';

const loadBeersEpic = action$ => {
  return action$.pipe(
    // eslint-disable-next-line
    tap(x => console.log('ACTION', x)),
    ignoreElements()
  );
};

export default combineEpics(loadBeersEpic);
