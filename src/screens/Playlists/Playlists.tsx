import React, {useState, useEffect} from 'react';
import {View, ImageBackground, FlatList, LogBox, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import authHandler from '../../auth/authHandler';
import SlideCard from '../../models/SlideCard/SlideCard';

import styles from './PlaylistsStyles';

LogBox.ignoreLogs(['Sending']);

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
  navigation: any;
};

export default function Playlists({
  navigation,
}: PlaylistsProps): React.ReactElement {
  const [slides, setSlides] = useState([] as any[]);

  const onFetchSlides = async () => {
    await authHandler.onLogin();

    const dataFromAuth = await AsyncStorage.getItem('authData');
    const token = dataFromAuth;

    if (token) {
      axios
        .get(
          'https://api.spotify.com/v1/users/21b6424uzt4ir7xxqgckuz6ti/playlists',
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token,
            },
          },
        )
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
    navigation.navigate('Player', {album: item});
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={header}>
        <View style={styles.global}>
          <Text style={styles.title}>Playlists</Text>
        </View>
        <View style={styles.header} />
      </ImageBackground>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        data={slides}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <SlideCard key={item} slide={item} goAlbum={goAlbumScreen} />
        )}
      />
    </View>
  );
}
