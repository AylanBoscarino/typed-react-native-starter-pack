import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';

// The Action type should be a normal string
export const DEFAULT_ACTION = 'DEFAULT_ACTION';

// The state combined to the store
export interface DefaultState {}

// The action object that's dispatched to the store
export interface DefaultAction {
  type: string;
  payload: object;
}
