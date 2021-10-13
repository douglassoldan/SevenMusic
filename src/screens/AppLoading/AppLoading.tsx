import React, {useCallback} from 'react';
import {ImageBackground, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {useReduxDispatch} from '../../redux';
import {setRunning} from '../../redux/state/appState';

import styles from './AppLoadingStyles';

const splash = require('../../images/splash.png');

export default function AppLoading(): React.ReactElement {
  const dispatch = useReduxDispatch();

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        dispatch(setRunning(true));
      }, 1500);
    }, [dispatch]),
  );

  return (
    <ImageBackground
      source={splash}
      resizeMode="cover"
      style={styles.container}>
      <Text style={styles.text}>Carregando dados...</Text>
    </ImageBackground>
  );
}
