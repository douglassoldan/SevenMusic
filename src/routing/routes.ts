import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export enum MainRoutes {
  // Init Stack
  Splash = 'Splash', // display a logo or splash image
  AppCheck = 'AppCheck', // check vital stuff, forced app updates and such

  // Auth Stack
  Login = 'Login', // existing user entry point
  Register = 'Register', // new user entry point

  // App Stack
  AppLoading = 'AppLoading', // Load User Data for signed in users
  Home = 'Home', // The first "real" page of the app, now a set of tabs
  Settings = 'Settings', // Default Settings Page
}

export enum HomeRoutes {
  Profile = 'Profile', // demo B for nesting
  Playlists = 'Playlists', // demo A for nesting
  Player = 'Player', // demo C for nesting
}

export type MainStackParamList = {
  // Init Stack
  [MainRoutes.Splash]: undefined;
  [MainRoutes.AppCheck]: undefined;

  // Auth Stack
  [MainRoutes.Login]: undefined;
  [MainRoutes.Register]: undefined;

  // App Stack
  [MainRoutes.AppLoading]: undefined;
  [MainRoutes.Home]: undefined;
  [MainRoutes.Settings]: undefined;
};

export type HomeTabsParamList = {
  [HomeRoutes.Profile]: undefined;
  [HomeRoutes.Playlists]: {update: boolean} | undefined; // just an example, "update" will later be used for version checks
  [HomeRoutes.Player]: undefined;
};

export const MainStack = createStackNavigator<MainStackParamList>();

// export const HomeTabs = createBottomTabNavigator<HomeTabsParamList>();
export const HomeTabs = createMaterialTopTabNavigator<HomeTabsParamList>();
