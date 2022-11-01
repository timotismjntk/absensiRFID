/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet, Image, FlatList, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {windowWidth, windowHeight} from '../../utils';

export default function LightBoxGalery({route, navigation}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const data = useRef([1, 2, 3, 4, 5, 6]).current;
  const flatlistRef = useRef(null);
  const miniFlatlistRef = useRef(null);

  const handleItemChange = useCallback(
    ({viewableItems, changes}) => {
      if (viewableItems.length >= 1) {
        if (viewableItems[0].isViewable) {
          setSelectedIndex(viewableItems[0]?.index);
          miniFlatlistRef?.current?.scrollToIndex({
            index: viewableItems[0]?.index,
            animated: true,
          });
        }
      }
    },
    [miniFlatlistRef],
  );

  return (
    <View style={styles.wrapper}>
      <FlatList
        ref={flatlistRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleItemChange}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100,
        }}
        renderItem={({item, index}) => (
          <View style={styles.defaultItem}>
            <View
              style={
                item?.icon
                  ? styles.customIconWrapper
                  : styles.defaultIconWrapper
              }>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/image-gallery.png')}
              />
            </View>
            <RectButton rippleColor={'white'} style={styles.button} />
          </View>
        )}
        contentContainerStyle={styles.flatlistContainer}
      />
      <RectButton style={styles.save}>
        <Text style={styles.saveLabel}>Simpan</Text>
      </RectButton>
      <FlatList
        ref={miniFlatlistRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.defaultItemMini,
              {
                marginRight: index === data.length - 1 ? 0 : windowWidth * 0.03,
                borderColor: 'green',
                borderWidth: selectedIndex === index ? 3 : 0,
              },
            ]}>
            <View
              style={
                item?.icon
                  ? styles.customIconWrapper
                  : styles.defaultIconMiniWrapper
              }>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/image-gallery.png')}
              />
            </View>
            <RectButton
              rippleColor={'white'}
              onPress={() => {
                flatlistRef?.current?.scrollToIndex({
                  index: index,
                  animated: true,
                });
                setSelectedIndex(index);
                miniFlatlistRef?.current?.scrollToIndex({
                  index: index,
                  animated: true,
                });
              }}
              style={styles.button}
            />
          </View>
        )}
        contentContainerStyle={styles.flatlistMiniContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    alignItems: 'center',
  },
  flatlistContainer: {
    backgroundColor: 'transparent',
    height: windowWidth * 0.8,
  },
  flatlistMiniContainer: {
    paddingVertical: '2%',
    marginTop: '6%',
    paddingHorizontal: '3%',
  },
  defaultItem: {
    width: windowWidth,
    height: windowWidth * 0.8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B3B3B',
    borderBottomRightRadius: windowWidth * 0.07,
    borderBottomLeftRadius: windowWidth * 0.07,
  },
  defaultItemMini: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B3B3B',
    borderBottomRightRadius: windowWidth * 0.01,
    borderBottomLeftRadius: windowWidth * 0.01,
  },
  defaultIconWrapper: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    overflow: 'hidden',
  },
  defaultIconMiniWrapper: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    overflow: 'hidden',
  },
  customIconWrapper: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    overflow: 'hidden',
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  save: {
    backgroundColor: '#BB902C',
    alignSelf: 'center',
    width: windowWidth * 0.36,
    height: windowWidth * 0.1,
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '4%',
  },
  saveLabel: {
    color: 'white',
    fontSize: windowWidth * 0.044,
    fontFamily: 'OpenSans-Bold',
  },
});
