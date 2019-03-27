import { DefaultState } from "../redux/default/types";

export interface NewComponentOwnProps {}

export interface NewComponentStateProps {
  defaultDomain: DefaultState;
}

export interface NewComponentDispatchProps {
  defaultAction: (args: any) => void;
}

export type NewComponentProps = NewComponentDispatchProps &
  NewComponentStateProps &
  NewComponentOwnProps;
