import React from 'react';
import { Text, View } from 'react-native';
import {
  NewComponentProps,
  NewComponentStateProps,
  NewComponentDispatchProps,
  NewComponentOwnProps,
} from './NewComponent.types';
import { StoreState } from '../types';
import { defaultAction } from '../redux/default/action';
import { connect } from 'react-redux';

function NewComponent(props: NewComponentProps) {
  return (
    <View>
      <Text> textInComponent </Text>
    </View>
  );
}

NewComponent.options = {};

const mapStateToProps = (state: StoreState): NewComponentStateProps => ({
  defaultDomain: state.defaultDomain,
});

const mapDispatchToProps: NewComponentDispatchProps = {
  defaultAction,
};

export default connect<
  NewComponentStateProps,
  NewComponentDispatchProps,
  NewComponentOwnProps,
  StoreState
>(
  mapStateToProps,
  mapDispatchToProps
)(NewComponent);
