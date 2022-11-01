/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, FlatList, Text, View, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {windowWidth, moderateScale, verticalScale, scale} from '../utils';

export default function Slider({data, theme}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Slider</Text>
      <FlatList
        horizontal
        contentContainerStyle={styles.sliderContainer}
        data={Array(data)}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.item,
              {
                marginRight: index !== data - 1 ? windowWidth * 0.03 : 0,
              },
            ]}>
            <Image
              style={styles.imageSlider}
              source={{
                uri: `https://picsum.photos/200/300?random=${
                  new Date().getMilliseconds() * (index + 1)
                }`,
              }}
            />
            <RectButton rippleColor="#3281ff" style={styles.button} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: '5%',
  },
  headerTitle: {
    paddingHorizontal: '3%',
    color: 'black',
    fontSize: windowWidth * 0.045,
    fontWeight: 'bold',
    paddingBottom: '2%',
  },
  sliderContainer: {
    paddingHorizontal: '4%',
  },
  item: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.35,
    elevation: 10,
    overflow: 'hidden',
    borderRadius: windowWidth * 0.01,
    backgroundColor: '#3281ff',
  },
  imageSlider: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
