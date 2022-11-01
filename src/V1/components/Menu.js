import React from 'react';
import {StyleSheet, Image, FlatList, Text, View} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  windowWidth,
  windowHeight,
  moderateScale,
  verticalScale,
  scale,
} from '../utils';

export default function Menu({data = 5}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerTitle}>Semua Pelajaran</Text>
      <Text style={styles.headerSubTitle}>Kelas 12 - IPA</Text>
      <FlatList
        data={Array(data)}
        nestedScrollEnabled
        style={{height: windowHeight * 0.3}} // to make it can scroll when nested vertical
        renderItem={({item, index}) => (
          <View style={styles.item}>
            <View style={styles.iconWrapper}>
              <Image
                style={styles.icon}
                source={{
                  uri: `https://picsum.photos/200/300?random=${
                    new Date().getMilliseconds() * (index + 1)
                  }`,
                }}
              />
            </View>
            <View style={styles.itemCenterContent}>
              <Text style={styles.itemCenterContentTitle}>Math</Text>
              <Text style={styles.itemCenterContentSubTitle}>7 Chapter</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="#3281ff"
            />
            <RectButton rippleColor="#3281ff" style={styles.button} />
          </View>
        )}
        contentContainerStyle={styles.menuContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: '5%',
  },
  headerTitle: {
    paddingHorizontal: '4%',
    color: 'black',
    fontSize: windowWidth * 0.045,
    fontFamily: 'OpenSans-Bold',
    paddingBottom: '1%',
  },
  headerSubTitle: {
    paddingHorizontal: '4%',
    color: 'grey',
    fontSize: windowWidth * 0.032,
    fontFamily: 'OpenSans-Regular',
    paddingBottom: '2%',
  },
  menuContainer: {
    paddingHorizontal: '4%',
    paddingVertical: '2%',
  },
  item: {
    padding: '5%',
    backgroundColor: 'white',
    elevation: 5,
    marginBottom: '6%',
    borderRadius: windowWidth * 0.02,
    width: windowWidth * 0.9,
    height: windowWidth * 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: windowWidth * 0.12,
    overflow: 'hidden',
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  itemCenterContent: {
    flex: 1,
    paddingHorizontal: '6%',
  },
  itemCenterContentTitle: {
    color: 'black',
    fontSize: windowWidth * 0.038,
    fontFamily: 'OpenSans-Bold',
  },
  itemCenterContentSubTitle: {
    color: 'grey',
    fontSize: windowWidth * 0.03,
    fontFamily: 'OpenSans-Regular',
  },
  button: {
    position: 'absolute',
    width: windowWidth * 0.9,
    height: windowWidth * 0.2,
  },
});
