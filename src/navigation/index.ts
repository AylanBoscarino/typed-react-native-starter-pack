import { Navigation } from 'react-native-navigation';

import { getRootStack } from './stack';
import registerComponents from './registerComponents';

/**
 * This function set's the root of our app's navigation
 * For info on how to do it check the official docs
 * https://wix.github.io/react-native-navigation/#/docs/top-level-api
 */
export function setNavigation() {
  registerComponents(Navigation);

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: getRootStack()
      }
    });
  });
}
