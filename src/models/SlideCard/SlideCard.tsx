import React from 'react';

import styles from './SlideCardStyles';
import Card from '../Card/Card';
import {View, Text, FlatList} from 'react-native';

const SlideCard = ({slide, goAlbum}: any) => {
  const arr = [];
  arr.push(slide);
  // const goAlbum = item => {
  //   console.warn(item);
  //   console.warn(props);
  //   // props.navigation.navigate('Album', { album: item.album });
  // };
  // const goScreen = (item) => {
  //   goAlbum({
  //     item,
  //   });
  // }
  console.log('card item ******* ', arr);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{slide.name}</Text>
      {/* <SlideScroll>
        {slide.itens &&
          slide.itens.map((itens, index) => <Card key={index} itens={itens} />)}
      </SlideScroll> */}
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={arr}
        keyExtractor={item => String(item.id)}
        renderItem={
          ({item, index}) => <Card onPress={() => goAlbum(item)} itens={item} />
          // slide.itens.map((itens, index) => (
          //   <Card onPress={props.onPress} key={index} itens={itens} />
          // ))
        }
      />
    </View>
  );
};

export default SlideCard;
