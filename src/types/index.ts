import { FunctionComponent } from 'react';
import { Options } from 'react-native-navigation';
import { DefaultState } from '../redux/default/types';

/**
 * The central state of the application
 * Shaped by the reducers combined
 * Stored in the app's Store
 */
export interface StoreState {
  defaultDomain: DefaultState;
}

// A React's Functional Component that recieved React Native Navigation's Options object
export interface NavigableComponent extends FunctionComponent {
  options: Options;
}
