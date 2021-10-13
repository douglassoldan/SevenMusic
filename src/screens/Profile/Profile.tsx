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
        <View style={styles.global} />
        <View style={styles.header} />
      </ImageBackground>
      <Text>Criar perfil do usuário aqui</Text>
      <Button
        title="settings"
        onPress={() => navigation.navigate(MainRoutes.Settings)}
      />
      <Button title="Sair" onPress={() => logoutHandler()} />
    </View>
  );
}
