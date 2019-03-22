import { LayoutStack } from 'react-native-navigation';

export function getRootStack(): LayoutStack {
  return {
    children: [
      {
        component: {
          name: 'MainApp',
        },
      },
    ],
  };
}
