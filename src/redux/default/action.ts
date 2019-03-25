import { DEFAULT_ACTION, DefaultAction, DefaultState } from './types';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';

/**
 * This is an example of an Action Dispatcher with the Redux-Thunk Middleware
 * 
 * @param args - An example of an dispatcher's argument
 * @returns the thunk action that will actually dispatch to the Store
 */
export function defaultAction(
  args: any
): ThunkAction<void, DefaultState, undefined, DefaultAction> {
  return async (dispatch: Dispatch<DefaultAction>) => {
    // Any asyncrnous side effect should be written here.
    dispatch({
      type: DEFAULT_ACTION,
      payload: { defaultText: args }
    });
  };
}
