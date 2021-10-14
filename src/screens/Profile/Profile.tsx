import React from 'react';
import {Text, Button, View, ImageBackground} from 'react-native';

import {MainNavigationProp} from '../../routing/types';
import {MainRoutes} from '../../routing/routes';
import {setLogout} from '../../redux/user/user';
import {useReduxDispatch} from '../../redux';

import styles from './ProfileStyles';

const header = require('../../images/header.jpeg');

type ProfileProps = {
  navigation: MainNavigationProp<MainRoutes.Home>;
};

export default function Profile({
  navigation,
}: ProfileProps): React.ReactElement {
  const dispatch = useReduxDispatch();
  const logoutHandler = () => dispatch(setLogout());

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={header}>
        <View style={styles.global}>
          <Text style={styles.title}>Perfil</Text>
        </View>
        <View style={styles.header} />
      </ImageBackground>
      <Text>Seja bem vindo!</Text>
      <Button title="Sair" onPress={() => logoutHandler()} />
    </View>
  );
}
