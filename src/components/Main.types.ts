import { DefaultState } from '../redux/default/types';

export type Props = DispatchProps & StateProps & OwnProps;

/**
 * The props the component recieve through composition
 */
export interface OwnProps {}

/**
 * The props redux will inject into the component
 * Through the mapStateToProps function
 * It contains the readonly state
 */
export interface StateProps {
  defaultDomain: DefaultState;
}

/**
 * The props container the action dispatchers that the component will use
 * The dispatchers are injected by Redux through mapDispatchToProps
 * Only call dispatchers after mapping them here first
 */
export interface DispatchProps {
  /**
   * Since the dispatcher wont return any value
   * We might as well type it as void here
   */
  defaultAction: (args: any) => void;
}
