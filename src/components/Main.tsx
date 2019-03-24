import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { StoreState } from '../types';
import { defaultAction } from '../redux/default/action';
import { Props, StateProps, DispatchProps, OwnProps } from './Main.types';

/**
 * This component should be seen as an example
 * Use it to write your reduxed components
 * It's integrate with thunk and RNN
 */
function Main(props: Props) {
  return (
    <View>
      <Text>{props.defaultDomain}</Text>
    </View>
  );
}

Main.options = {};

const mapStateToProps = (state: StoreState): StateProps => ({
  defaultDomain: state.defaultDomain
});

const mapDispatchToProps: DispatchProps = {
  defaultAction
};

/**
 * The function connect receives a generic with four parameters
 * The state mapped to props, the dispatch mapped to props
 * The props the component receives through composition
 * And the type of the state guarded in the Store
 */
export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  mapStateToProps,
  mapDispatchToProps
)(Main);
