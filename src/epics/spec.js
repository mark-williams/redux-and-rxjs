import { of } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import loadBeersEpic from './';
import { searchInput } from '../actions';
import { ajax } from 'rxjs/ajax';
import { toArray } from 'rxjs/operators';

jest.useFakeTimers();

describe('beers epic', () => {
  beforeEach(() => {
    ajax.getJSON = jest.fn(() => of([{ name: 'IPA' }, { name: 'Flat Cap' }]));
  });

  it('should dispatch retrieving and retrieved actions on search action', () => {
    const action$ = ActionsObservable.of(searchInput('a'));
    const results$ = loadBeersEpic(action$);

    results$.pipe(toArray()).subscribe(a => {
      expect(a[0].type).toBe('RETRIEVING');
      expect(a[1].type).toBe('BEERS_RETRIEVED');
    });

    jest.runAllTimers();
  });
});
