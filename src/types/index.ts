import { DefaultState } from '../redux/default/types';

/**
 * The central state of the application
 * Shaped by the reducers combined
 * Stored in the app's Store
 */
export interface StoreState {
  defaultDomain: DefaultState;
}
