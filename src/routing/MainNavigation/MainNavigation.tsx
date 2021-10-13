import React, {useRef} from 'react';
import {ImageBackground, View} from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';

import {HomeTabs, MainRoutes, MainStack, HomeRoutes} from '../routes';
import {useReduxSelector} from '../../redux';
import {selectIsRunning} from '../../redux/state/appState';

import SplashScreen from '../../screens/Splash/Splash';
import AppCheckScreen from '../../screens/InitStack/AppCheck';
import Login from '../../screens/Login/Login';
import RegisterScreen from '../../screens/Register/Register';
import AppLoadingScreen from '../../screens/AppLoading/AppLoading';
import HomeScreen from '../../screens/Playlists/Playlists';
import Profile from '../../screens/Profile/Profile';
import HomeScreenC from '../../screens/AppStack/Player';
import SettingsScreen from '../../screens/AppStack/SettingsScreen';

import styles from './MainNavigationStyles';

const header = require('../../images/header.jpeg');

const Home = () => (
  <HomeTabs.Navigator
    tabBarPosition="bottom"
    initialRouteName={HomeRoutes.Playlists}>
    <HomeTabs.Screen
      name={HomeRoutes.Profile}
      component={Profile}
      options={{
        title: 'Perfil',
      }}
    />
    <HomeTabs.Screen
      name={HomeRoutes.Playlists}
      component={HomeScreen}
      options={{title: 'Playlists'}}
    />

    <HomeTabs.Screen
      name={HomeRoutes.Player}
      component={HomeScreenC}
      options={{title: 'Player'}}
    />
  </HomeTabs.Navigator>
);

const MainNavigation = (): React.ReactElement => {
  const isAppRunning = useReduxSelector(selectIsRunning);

  const navigationRef: React.RefObject<NavigationContainerRef<any>> = useRef(
    null,
  );

  useReduxDevToolsExtension(navigationRef);

  const forFade = ({current}: any) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isAppRunning ? (
          <>
            <MainStack.Screen name={MainRoutes.Home} component={Home} />
            <MainStack.Screen
              name={MainRoutes.Settings}
              component={SettingsScreen}
            />
          </>
        ) : (
          <>
            <MainStack.Screen
              name={MainRoutes.Splash}
              component={SplashScreen}
              options={{cardStyleInterpolator: forFade}}
            />
            <MainStack.Screen
              name={MainRoutes.AppCheck}
              component={AppCheckScreen}
              options={{cardStyleInterpolator: forFade}}
            />
            <MainStack.Screen
              name={MainRoutes.Login}
              component={Login}
              options={{gestureEnabled: false, headerShown: false}}
            />
            <MainStack.Screen
              name={MainRoutes.Register}
              component={RegisterScreen}
              options={{
                headerShown: true,
                title: 'Cadastro',
                headerBackTitle: ' ',
                headerBackground: () => (
                  <>
                    <ImageBackground style={styles.background} source={header}>
                      <View style={styles.global} />
                      <View style={styles.header} />
                    </ImageBackground>
                  </>
                ),
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <MainStack.Screen
              name={MainRoutes.AppLoading}
              component={AppLoadingScreen}
              options={{cardStyleInterpolator: forFade}}
            />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
