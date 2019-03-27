import { LayoutStack } from 'react-native-navigation';

/**
 * It's an exemplo of a RNN's navigation stack
 * for more info check the official docs
 * https://wix.github.io/react-native-navigation/#/docs/layout-types
 * 
 * @returns an LayoutStack object that can be used by React Native Navigation
 */
export function getRootStack(): LayoutStack {
  return {
    children: [
      {
        component: {
          name: 'MainApp'
        }
      },
      {
        component: {
          name: 'NewComponent'
        }
      }
    ]
  };
}
