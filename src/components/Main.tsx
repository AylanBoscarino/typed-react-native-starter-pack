import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { StoreState } from '../types';
import { defaultAction } from '../redux/default/action';
import { Props, StateProps, DispatchProps, OwnProps } from './Main.types';

/**
 * This component should be seen as an example
 * Use it to write our reduxed components
 * It's integrate with thunk and RNN
 *
 * @param props - The final props object provided to the component.
 * @returns the component's template.
 */
function Main(props: Props) {
  return (
    <View>
      <Text>{props.defaultDomain.defaultText}</Text>
      <TextInput
        value={props.defaultDomain.defaultText}
        onChangeText={props.defaultAction}
      />
    </View>
  );
}

Main.options = {};

/**
 * The function that map the store's state into the component's props
 * @param state - the state present in the store
 * @returns an object with the state that should be accessed by the component
 */
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
