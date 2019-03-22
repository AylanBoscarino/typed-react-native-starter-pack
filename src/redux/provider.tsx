
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { Options } from 'react-native-navigation';
import { NavComponent } from '../types';

interface Props {}

interface State {}


// TODO: type the Wraped Component as having an options object
export function provideRedux (WrapedComponent: new() => NavComponent<Props, State>) {
  class WraperComponent extends React.Component {
    static options(props: Props) {}
    render() {
      return (
        <Provider store={store}>
          <WrapedComponent />
        </Provider>
      );
    }
  };

  // TODO: make this error stop showing;
  WraperComponent.options = WrapedComponent.options;
  return WraperComponent;
}