import { NavigationRoot } from "react-native-navigation/lib/dist/Navigation";
import Main from "../components/Main";


export default function registerComponents(Navigation: NavigationRoot) {
  Navigation.registerComponent(`MainApp`, () => Main);
}