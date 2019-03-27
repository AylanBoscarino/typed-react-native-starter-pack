import { NavigationRoot } from 'react-native-navigation/lib/dist/Navigation';
import Main from '../components/Main';
import { provideRedux } from '../redux/provider';

/**
 * This function register the components that must be screens in React Native Navigation
 * The registerComponent's 2nd arg must be a callback function calling provideRedux
 * Pass as an argument to provideRedux the component you wish set as a Screen
 * 
 * @param - The React Native Navigation main object
 */
export default function registerComponents(Navigation: NavigationRoot) {
  Navigation.registerComponent(`MainApp`, () => provideRedux(Main));
}
