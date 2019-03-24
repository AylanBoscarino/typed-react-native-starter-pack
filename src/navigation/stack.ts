import { LayoutStack } from 'react-native-navigation';

/**
 * It's an exemplo of a RNN's navigation stack
 * for more info check the official docs
 * https://wix.github.io/react-native-navigation/#/docs/layout-types
 */
export function getRootStack(): LayoutStack {
  return {
    children: [
      {
        component: {
          name: 'MainApp'
        }
      }
    ]
  };
}
