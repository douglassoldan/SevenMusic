import React, {useCallback} from 'react';
import {TouchableWithoutFeedback, ImageBackground} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {MainNavigationProp} from '../../routing/types';
import {MainRoutes} from '../../routing/routes';

import styles from './SplashStyles';

const splash = require('../../images/splash.png');

type SplashScreenProps = {
  navigation: MainNavigationProp<MainRoutes.Splash>;
};

export default function SplashScreen({
  navigation,
}: SplashScreenProps): React.ReactElement {
  const navigate = useCallback(
    () => navigation.navigate(MainRoutes.AppCheck),
    [navigation],
  );

  useFocusEffect(
    useCallback(() => {
      const navigationTimer = setTimeout(() => {
        navigate();
      }, 3000);

      return (): void => clearTimeout(navigationTimer);
    }, [navigate]),
  );

  return (
    <TouchableWithoutFeedback onPress={() => navigate()}>
      <ImageBackground
        source={splash}
        resizeMode="cover"
        style={styles.container}
      />
    </TouchableWithoutFeedback>
  );
}
