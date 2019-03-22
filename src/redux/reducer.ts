import { combineReducers, Action } from 'redux';
import { StoreState } from '../types';
import { defaultReducer } from './default/reducer';

export default combineReducers<StoreState>({
  // TODO: write your reducers here
  defaultReducer,
});
