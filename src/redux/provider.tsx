import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { Options } from 'react-native-navigation';
import { NavigableComponent } from '../types';

/**
 * This higher order component empowers your component with access to Redux
 * You must pass here any component you wish to set as a screen to RNN
 * With this HoC we can provide any component with Redux's state
 */
export function provideRedux(WrapedComponent: NavigableComponent) {
  class WraperComponent extends React.Component {
    static options: Options = {};
    render() {
      return (
        <Provider store={store}>
          <WrapedComponent />
        </Provider>
      );
    }
  }

  /**
   * This line allows you to define an options objetc in the prototype of the Functional Component
   * This way you are able to set the navigation options provided by React Native Navigation
   */
  WraperComponent.options = WrapedComponent.options;
  return WraperComponent;
}
