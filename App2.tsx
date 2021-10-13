import React from 'react';
import {StatusBar} from 'react-native';
import Album from './src2/pages/Album';
import Main from './src2/pages/Main';
import TabBar from './src2/components/TabBar';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
      },
      Album: {
        screen: Album,
      },
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

const App = () => <Routes />;

export default App;
