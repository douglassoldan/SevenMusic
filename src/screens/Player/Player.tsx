import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground} from 'react-native';

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
  const {album} = route.params;

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
        <View style={styles.round} />
      </ImageBackground>
      <View style={styles.containerSpotify}>
        <View style={styles.containerNavBar}>
          <Text>Left</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitleTitle}>Name: {album.name}</Text>
            <Text style={styles.subtitleDescription}>{album.description}</Text>
          </View>

          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitleTitle}>Artist Name: {ownerName}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
