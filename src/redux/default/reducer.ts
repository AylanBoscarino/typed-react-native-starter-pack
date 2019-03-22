import { DEFAULT_ACTION, DefaultState, DefaultAction } from './types';
import { Action, Reducer, AnyAction } from 'redux';

const initialState: DefaultState = {};

/** -------------------------------------------------------
 * | The reducer should recieve the State and the Action
 * | The reducer should return another State object
 */
export function defaultReducer(
  state: DefaultState = initialState,
  { type, payload }: DefaultAction
): DefaultState {

  switch (type) {
    case DEFAULT_ACTION:
      return { ...state, ...payload };

    default:
      return state;
  }

}
