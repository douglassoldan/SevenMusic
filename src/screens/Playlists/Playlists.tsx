import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import {MainNavigationProp} from '../../routing/types';
import {MainRoutes} from '../../routing/routes';
import authHandler from '../../auth/authHandler';
import SlideCard from '../../models/SlideCard/SlideCard';

import styles from './PlaylistsStyles';

const header = require('../../images/header.jpeg');

const config = {
  clientId: '1c1444bd4a0244368fbf9d9c1a77dca7', // available on the app page
  clientSecret: 'fa416221192b4382ba065cf891b3583f', // click "show client secret" to see this
  redirectUrl: 'com.spotify.SevenApps:/oauth', // the redirect you defined after creating the app
  scopes: ['user-read-email', 'playlist-modify-public', 'user-read-private'], // the scopes you need to access
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};

type PlaylistsProps = {
  navigation: MainNavigationProp<MainRoutes.Home>;
};

export default function Playlists({
  navigation,
}: PlaylistsProps): React.ReactElement {
  const [slides, setSlides] = useState([]);

  const onFetchSlides = async () => {
    await authHandler.onLogin();

    // console.log('authstate ******* ',authHandler)
    const dataFromAuth = await AsyncStorage.getItem('authData');
    const token = dataFromAuth;

    // console.log('token ******* ',dataFromAuth)
    if (token) {
      console.log('token inside playlist api ******* ', token);
      axios
        .get('https://api.spotify.com/v1/users/wizzler/playlists', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        })
        .then(result => {
          console.log('result music ****** ', result);
          setSlides(result.data.items);
        })
        .catch(error => console.error(error));
    }
  };

  useEffect(() => {
    onFetchSlides();
  }, []);

  const goAlbumScreen = (item: any) => {
    // console.warn(item);
    navigation.navigate('Player', {album: item});
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={header}>
        <View style={styles.global} />
        <View style={styles.header} />
      </ImageBackground>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        data={slides}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => (
          <SlideCard
            // key={item.id}
            slide={item}
            goAlbum={goAlbumScreen}
          />
        )}
      />
    </View>
  );
}
