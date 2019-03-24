import { FunctionComponent, ComponentClass } from 'react';
import { Options } from 'react-native-navigation';
import { DefaultState } from '../redux/default/types';
import { ConnectedComponentClass } from 'react-redux';

/**
 * The central state of the application
 * Shaped by the reducers combined
 * Stored in the app's Store
 */
export interface StoreState {
  defaultDomain: DefaultState;
}

// A Redux connected Component that recieved React Native Navigation's Options object
export interface NavigableComponent extends ConnectedComponentClass<any, {}> {
  options: Options;
}
