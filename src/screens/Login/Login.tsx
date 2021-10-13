import React, {useState, useCallback} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {MainNavigationProp} from '../../routing/types';
import {MainRoutes} from '../../routing/routes';
import {useReduxDispatch, useReduxSelector} from '../../redux';
import {attemptLogin, resetLogin, selectLogin} from '../../redux/user/user';

import styles from './LoginStyles';
import {PrimaryButton} from '../../models/Buttons/Buttons';

const background = require('../../images/background.png');

type LoginScreenProps = {
  navigation: MainNavigationProp<MainRoutes.Login>;
};

export default function Login({
  navigation,
}: LoginScreenProps): React.ReactElement {
  const dispatch = useReduxDispatch();
  const isLoggedIn = useReduxSelector(selectLogin);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useFocusEffect(
    useCallback(() => {
      if (isLoggedIn) {
        navigation.navigate(MainRoutes.AppLoading);
      }
    }, [navigation, isLoggedIn]),
  );

  const handleSubmit = (): void => {
    dispatch(attemptLogin(email, password));
  };

  const handleSwitch = (): void => {
    dispatch(resetLogin());
    navigation.navigate(MainRoutes.Register);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.logoView}>
        <View style={styles.upLogo} />
        <View style={styles.round} />
      </ImageBackground>
      <View style={styles.inputView}>
        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          style={styles.email}
          placeholderTextColor="#A3A3A3"
          textContentType="emailAddress"
        />
        <TextInput
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Senha"
          style={styles.password}
          placeholderTextColor="#A3A3A3"
        />
        <TouchableOpacity onPress={() => handleSwitch()}>
          <Text style={styles.registerText}>
            Não tem conta?{' '}
            <Text style={styles.registerClick}>Cadastre-se!</Text>
          </Text>
        </TouchableOpacity>
        <PrimaryButton title="ENTRAR" onPress={() => handleSubmit()} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Desafio SevenApps</Text>
        <Text style={styles.textFooter}>@douglassoldan</Text>
      </View>
    </View>
  );
}
