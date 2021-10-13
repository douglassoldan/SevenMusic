import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {MainNavigationProp} from '../../routing/types';
import {MainRoutes} from '../../routing/routes';
// import DefaultPage from '../../components/shells/DefaultPage';

import styles from './PlayerStyles';

const background = require('../../images/background.png');

type HomeScreenProps = {
  navigation: MainNavigationProp<MainRoutes.Home>;
};
const HomeScreenC = ({navigation}: HomeScreenProps): React.ReactElement => (
  // <DefaultPage>
  //   <Text>Criar um player aqui</Text>
  // </DefaultPage>
  <View style={styles.container}>
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.logoView}>
      <View style={styles.upLogo} />
      <View style={styles.round} />
    </ImageBackground>
    <View style={styles.inputView}>
      <Text style={styles.textFooter}>
        Mostrar o player aqui e {'\n'}colocar a foto do artista acima
      </Text>
    </View>
    <View style={styles.footer} />
  </View>
);

export default HomeScreenC;
