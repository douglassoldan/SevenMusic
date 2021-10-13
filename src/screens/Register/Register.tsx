import React, {useCallback, useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {MainNavigationProp} from '../../routing/types';
import {MainRoutes} from '../../routing/routes';
import {useReduxDispatch, useReduxSelector} from '../../redux';
import {attemptRegister, resetLogin, selectLogin} from '../../redux/user/user';

import {PrimaryButton} from '../../models/Buttons/Buttons';

import styles from './RegisterStyles';

type RegisterScreenProps = {
  navigation: MainNavigationProp<MainRoutes.Register>;
};

export default function Register({
  navigation,
}: RegisterScreenProps): React.ReactElement {
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
    dispatch(attemptRegister(email, password));
  };

  const handleSwitch = (): void => {
    dispatch(resetLogin());
    navigation.navigate(MainRoutes.Login);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Seja um membro{'\n           '}Seven Music!
      </Text>
      <>
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
      </>
      <TouchableOpacity onPress={handleSwitch}>
        <Text style={styles.registerText}>
          Já tem conta? <Text style={styles.registerClick}>Logue-se!</Text>
        </Text>
      </TouchableOpacity>
      <PrimaryButton title="CADASTRAR" onPress={() => handleSubmit()} />
    </View>
  );
}
