import { Dispatch, FunctionComponent } from 'react';
import { ThunkAction } from 'redux-thunk';
import { OptionsOverlay, Options } from 'react-native-navigation';

// The Action type should be a normal string
export const DEFAULT_ACTION = 'DEFAULT_ACTION';

// The state combined to the store
export interface DefaultState {}

// The action object that's dispatched to the store
export interface DefaultAction {
  type: string;
  payload: object;
}

// A React's Functional Component that recieved React Native Navigation's Options object
export interface NavigableComponent extends FunctionComponent {
  options: Options;
}
