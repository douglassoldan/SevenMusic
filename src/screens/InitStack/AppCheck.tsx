import React, {useCallback, useState} from 'react';
import {ImageBackground, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {MainNavigationProp} from '../../routing/types';
import {MainRoutes} from '../../routing/routes';
import {useReduxSelector} from '../../redux';
import {selectLogin} from '../../redux/user/user';
import {useInterval} from '../../hooks';

import styles from './AppCheckStyles';

const splash = require('../../images/splash.png');

type AppCheckScreenProps = {
  navigation: MainNavigationProp<MainRoutes.AppCheck>;
};

export default function AppCheckScreen({
  navigation,
}: AppCheckScreenProps): React.ReactElement {
  const [count, setCount] = useState(0);
  const isLoggedIn = useReduxSelector(selectLogin);

  const getRoute = useCallback(
    () => (isLoggedIn ? MainRoutes.AppLoading : MainRoutes.Login),
    [isLoggedIn],
  );

  useInterval(() => {
    if (count < 200) {
      setCount(count + 1);
    }
    if (count >= 200) {
      setCount(0);
    }
  }, 10);

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        navigation.navigate(getRoute());
      }, 1500);
    }, [navigation, getRoute]),
  );

  return (
    <ImageBackground
      source={splash}
      resizeMode="cover"
      style={styles.container}>
      <Text style={styles.text}>Iniciando aplicativo...</Text>
    </ImageBackground>
  );
}
