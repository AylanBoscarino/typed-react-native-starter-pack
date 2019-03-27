// import { Options } from 'react-native-navigation';
import { DefaultState } from '../redux/default/types';
// import { ConnectedComponentClass } from 'react-redux';
// import { FunctionComponent } from 'react';

/**
 * The central state of the application
 * Shaped by the reducers combined
 * Stored in the app's Store
 */
export interface StoreState {
  defaultDomain: DefaultState;
}

// A Redux connected Component that recieved React Native Navigation's Options object
// export interface NavigableComponent<T> extends ConnectedComponentClass<any, {}> {
//   options: T;
// }

// export interface NavigableFunctionalComponent<T> extends FunctionComponent {
//   options: T;
// }