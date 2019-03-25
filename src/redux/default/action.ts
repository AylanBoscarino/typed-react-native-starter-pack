import {
  DEFAULT_ACTION,
  DefaultAction,
  DefaultState,
  MyDefaultActions
} from './types';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import "isomorphic-fetch";


/**
 * This is an example of an Action Dispatcher with the Redux-Thunk Middleware
 *
 * @param args - An example of an dispatcher's argument
 * @returns the thunk action that will actually dispatch to the Store
 */
export function defaultAction(
  args: any
): ThunkAction<Promise<DefaultAction>, DefaultState, undefined, DefaultAction> {
  return (dispatch: Dispatch<MyDefaultActions>): Promise<DefaultAction> => {
    // Any asyncrnous side effect should be written here.
    return fetch('https://jsonplaceholder.typicode.com').then(res =>
      dispatch({
        type: DEFAULT_ACTION,
        payload: { defaultText: args }
      })
    );
  };
}
