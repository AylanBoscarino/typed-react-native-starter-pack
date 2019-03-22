import { Navigation } from 'react-native-navigation';

import { getRootStack } from './stack';
import registerComponents from './registerComponents';

export function setNavigation() {
  registerComponents(Navigation);

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: getRootStack(),
      },
    });
  });
}
