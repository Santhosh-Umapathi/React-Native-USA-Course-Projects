import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//Provider
import {Provider as BlogProvider} from './src/context/BlogContext'
//Screens
import HomeScreen from './src/screens/HomeScreen';
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";


const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blogs",
      headerTintColor: "white", //Header button colors
      headerStyle: {
        backgroundColor: "#F4C724", // header bg color
      },
      headerTitleStyle: {
        color: "white", // header font color
        fontSize: 20, // header font Size
      },
    },
  }
);
const App = createAppContainer(MainNavigator);

export default () =>
{
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
