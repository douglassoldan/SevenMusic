import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import authHandler from '../../auth/authHandler';

import styles from './PlayerStyles';

type PlayerProps = {
  route: any;
  navigation: any;
};

export default function Player({
  route,
  navigation,
}: PlayerProps): React.ReactElement {
  const [detail, setDetail] = useState({});
  const [slides, setSlides] = useState([] as any[]);

  const {album} = route.params;
  // console.log('album ****** ', album.href);

  const onFetchSlides = async () => {
    await authHandler.onLogin();

    const dataFromAuth = await AsyncStorage.getItem('authData');
    const token = dataFromAuth;

    if (token) {
      axios
        .get(
          'https://api.spotify.com/v1/users/21b6424uzt4ir7xxqgckuz6ti/playlists',
          {
            // .get(album.href, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token,
            },
          },
        )
        .then(result => {
          console.log('result playlist ****** ', result);
          setSlides(result.data.items);
        })
        .catch(error => console.error(error));
    }
  };

  useEffect(() => {
    const {album} = route.params;
    const detailProp = album;
    setDetail(detailProp);
  }, []);

  // const goBack = () => {
  //   navigation.pop();
  // };

  let ownerName =
    album && album.owner && album.owner.display_name
      ? album.owner.display_name
      : '';

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: album && album.images && album.images[0].url,
        }}
        resizeMode="cover"
        style={styles.logoView}>
        <View style={styles.upLogo} />
        <View style={styles.round}>
          <Text style={styles.subtitleTitle}>{album.name}</Text>
        </View>
      </ImageBackground>
      <View style={styles.containerSpotify}>
        <View style={styles.content}>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitleDescription}>
              {album.description} Criador: {ownerName}
            </Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            data={slides}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              // <SlideCard key={item} slide={item} goAlbum={goAlbumScreen} />
              <Text>{item}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}
