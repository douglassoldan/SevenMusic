import React from 'react';

import styles from './SlideCardStyles';
import Card from '../Card/Card';
import {View, Text, FlatList} from 'react-native';

const SlideCard = ({slide, goAlbum}: any) => {
  const arr = [];
  arr.push(slide);

  console.log('card item ******* ', arr);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{slide.name}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={arr}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => (
          <Card onPress={() => goAlbum(item)} itens={item} />
        )}
      />
    </View>
  );
};

export default SlideCard;
