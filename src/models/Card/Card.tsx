import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import styles from './CardStyles';

const Card = ({itens, ...props}: any) => {
  // console.log('card item inside card JS ******* ',itens.images[0])
  let finalImages =
    itens.images && itens.images[0] && itens.images[0].url !== undefined
      ? itens.images[0].url
      : '';

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
        <Image style={styles.photo} source={{uri: finalImages}} />
        <View style={styles.containerSubtitle}>
          <Text style={styles.subtitleTitle}>{itens.name}</Text>
          <Text style={styles.subtitleDescription}>{itens.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
