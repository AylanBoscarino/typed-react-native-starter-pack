import { DEFAULT_ACTION, DefaultAction, DefaultState } from './types';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';

/** ---------------------------------------------------------------------------------
 * | The action dispatcher's return must be a ThunkAction wich generics should be:
 * | The ThunkAction's return, the State, Thunk's extraArgument and the Action
 * | The action dispatcher's param should be typed accordingly to it's use
 */
export function defaultAction(args: any): ThunkAction<void, DefaultState, any, DefaultAction> {
  return (dispatch: Dispatch<DefaultAction>) => {
    dispatch({
      type: DEFAULT_ACTION,
      payload: {},
    });
  };
}
