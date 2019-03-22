import { NavigationRoot } from "react-native-navigation/lib/dist/Navigation";
import Main from "../components/Main";
import { provideRedux } from "../redux/provider";


export default function registerComponents(Navigation: NavigationRoot) {
  Navigation.registerComponent(`MainApp`, () => provideRedux(Main));
}