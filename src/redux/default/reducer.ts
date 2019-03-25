import { DEFAULT_ACTION, DefaultState, DefaultAction } from './types';

/**
 * The state of the Default Domain
 */
const initialState: DefaultState = {
  defaultText: 'starting point'
};

/**
 * The reducer should recieve the State and the Action
 * The reducer should return another State object
 * The reducer should represent it's domain
 * 
 * @param state - The state of the application at the current moment, defaults to the initial state
 * @param action - The action being dispatched
 * @returns a new altered state ready to update the store.
 * 
 */
export function defaultReducer(
  state: DefaultState = initialState,
  action: DefaultAction
): DefaultState {
  switch (action.type) {
    case DEFAULT_ACTION:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
