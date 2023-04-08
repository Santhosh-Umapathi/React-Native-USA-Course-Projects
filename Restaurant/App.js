import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ResultsScreen from "./src/screens/ResultsScreen";


const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Results: ResultsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Restaurants",
      headerTintColor: "white", //Header button colors
      headerStyle: {
        backgroundColor: "#EC4849", // header bg color
      },
      headerTitleStyle: {
        color: "white", // header font color
      },
    },
  }
);
export default createAppContainer(MainNavigator);