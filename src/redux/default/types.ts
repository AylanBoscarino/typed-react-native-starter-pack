// The Action type should be a normal string
export const DEFAULT_ACTION = 'DEFAULT_ACTION';

// The state of the domain that'll be combined to the store
export interface DefaultState {
  defaultText: string;
}

// The action object that's dispatched to the store
export interface DefaultAction {
  type: string;
  payload: object;
}
