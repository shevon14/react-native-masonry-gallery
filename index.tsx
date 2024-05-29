import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';

const ImageGallery = () => {
  // image list
  const imageList = [
    {
      id: '1',
      uri: require('./assets/1.png'),
      height: 300,
    },
    {
      id: '2',
      uri: require('./assets/2.png'),
      height: 140,
    },
    {
      id: '3',
      uri: require('./assets/3.png'),
      height: 260,
    },
    {
      id: '4',
      uri: require('./assets/4.png'),
      height: 150,
    },
    {
      id: '5',
      uri: require('./assets/5.png'),
      height: 300,
    },
    {
      id: '6',
      uri: require('./assets/6.png'),
      height: 130,
    },
    {
      id: '7',
      uri: require('./assets/7.png'),
      height: 300,
    },
    {
      id: '8',
      uri: require('./assets/8.png'),
      height: 180,
    },
  ];

  // split images into two columns
  const splitImages = (images: any[]) => {
    const leftColumn: any[] = [];
    const rightColumn: any[] = [];
    let leftHeight = 0;
    let rightHeight = 0;

    images.forEach((image: {height: number}) => {
      if (leftHeight <= rightHeight) {
        leftColumn.push(image);
        leftHeight += image.height;
      } else {
        rightColumn.push(image);
        rightHeight += image.height;
      }
    });

    return {leftColumn, rightColumn};
  };

  const {leftColumn, rightColumn} = splitImages(imageList);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View>
        {leftColumn.map(image => (
          <View key={image.id} style={styles.imageContainer}>
            <Image
              source={image.uri}
              style={{
                width: Dimensions.get('screen').width / 2 - 8,
                height: image.height,
              }}
            />
          </View>
        ))}
      </View>
      <View>
        {rightColumn.map(image => (
          <View key={image.id} style={styles.imageContainer}>
            <Image
              source={image.uri}
              style={{
                width: Dimensions.get('screen').width / 2,
                height: image.height,
              }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default ImageGallery;
