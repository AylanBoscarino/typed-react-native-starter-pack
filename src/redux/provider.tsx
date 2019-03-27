import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { Options } from 'react-native-navigation';
// import { NavigableComponent, NavigableFunctionalComponent } from '../types';

/**
 * This higher order component empowers our components with access to Redux
 * We must pass here any component we wish to set as a screen to RNN
 * With this HoC we can provide any component with Redux's state
 * 
 * @param WrapedComponent - The component that's going to be provided with Redux
 * @returns the component with access to Redux's Store
 */
export function provideRedux(WrapedComponent: any) {
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
   * This line allows us to define an options objetc in the prototype of the Functional Component
   * This way we are able to set the navigation options provided by React Native Navigation
   */
  WraperComponent.options = WrapedComponent.options;
  return WraperComponent;
}
