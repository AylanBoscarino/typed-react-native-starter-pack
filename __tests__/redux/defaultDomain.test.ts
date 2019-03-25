import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { defaultReducer } from '../../src/redux/default/reducer';
import {
  DEFAULT_ACTION,
  DefaultAction,
  DefaultState
} from '../../src/redux/default/types';
import { defaultAction } from '../../src/redux/default/action';

const middlewares = [thunk];
const mockStore = configureMockStore<
  DefaultState,
  ThunkDispatch<DefaultState, undefined, DefaultAction>
>(middlewares);

test('the reducer should return "fried_chicken" in defaultText', () => {
  const fakeAction = {
    type: DEFAULT_ACTION,
    payload: { defaultText: 'fried_chicken' }
  };
  const newState = defaultReducer(undefined, fakeAction);
  expect(newState.defaultText).toBe('fried_chicken');
});

test('the dispatcher must dispatch an action with the type DEFAULT_ACTION and the fried_chicken defaultText payload', () => {
  const store = mockStore({ defaultText: 'starting point' });

  const expectedActions = [
    { type: DEFAULT_ACTION, payload: { defaultText: 'fried_chicken' } }
  ];

  return store.dispatch(defaultAction('fried_chicken')).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
