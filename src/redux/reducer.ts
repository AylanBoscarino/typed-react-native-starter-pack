import { combineReducers, Action } from 'redux';
import { StoreState } from '../types';
import { defaultReducer } from './default/reducer';

/**
 * This call of combineReducers will shape our app's state
 * Each reducer should mirror one domain of the app
 * The combined reducers will define the state
 */
export default combineReducers<StoreState>({
  defaultDomain: defaultReducer
});
