/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image, FlatList, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {windowWidth, windowHeight} from '../../utils';

export default function Berita({navigation}) {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={Array(15)}
        renderItem={({item, index}) => (
          <View style={[styles.defaultItem, {backgroundColor: 'white'}]}>
            <View
              style={
                item?.icon
                  ? styles.customIconWrapper
                  : styles.defaultIconWrapper
              }>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/sekoolahLefticon.png')}
              />
            </View>
            <View style={styles.itemCenterContent}>
              <Text numberOfLines={1} style={styles.itemCenterContentTitle}>
                {item?.title || 'Ini Adalah Judul Berita Diposting Sekola...'}
              </Text>
              <Text numberOfLines={2} style={styles.itemCenterContentSubTitle}>
                {item?.subtitle ||
                  'Ini adalah contoh potongan isi berita yang diposting oleh admin sekolah tentang kegiatan yang dilaksanakan oleh...'}
              </Text>
              <Text numberOfLines={2} style={styles.itemCenterContentCreatedAt}>
                {item?.subtitle || 'Senin, 1 September 2022'}{' '}
              </Text>
            </View>
            <RectButton
              rippleColor={'white'}
              style={styles.button}
              onPress={() => navigation.navigate('DetailBerita')}
            />
          </View>
        )}
        contentContainerStyle={styles.flatlistContainer}
        ListFooterComponent={
          <RectButton style={styles.loadMore}>
            <MaterialIcons
              name="refresh"
              size={windowWidth * 0.07}
              color="white"
            />
            <Text style={styles.loadMoreLabel}>Load More</Text>
          </RectButton>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    marginBottom: '3%',
  },
  headerTitle: {
    color: 'black',
    fontSize: windowWidth * 0.045,
    fontFamily: 'OpenSans-Bold',
    paddingBottom: '1%',
  },
  headerSubTitle: {
    color: 'grey',
    fontSize: windowWidth * 0.032,
    fontFamily: 'OpenSans-Regular',
    paddingBottom: '2%',
  },
  flatlistContainer: {
    paddingVertical: '6%',
  },
  defaultItem: {
    alignSelf: 'center',
    marginBottom: '4%',
    borderRadius: windowWidth * 0.02,
    width: windowWidth * 0.85,
    height: windowWidth * 0.21,
    overflow: 'hidden',
    flexDirection: 'row',
    elevation: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  defaultIconWrapper: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.21,
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
    resizeMode: 'stretch',
  },
  itemCenterContent: {
    flex: 1,
    padding: '2%',
  },
  itemCenterContentTitle: {
    color: 'black',
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-Bold',
  },
  itemCenterContentSubTitle: {
    color: 'black',
    fontSize: windowWidth * 0.03,
    fontFamily: 'OpenSans-Regular',
    lineHeight: 13,
    marginTop: '2%',
  },
  itemCenterContentCreatedAt: {
    color: 'black',
    fontSize: windowWidth * 0.028,
    marginTop: '2%',
    fontFamily: 'OpenSans-Regular',
  },
  button: {
    position: 'absolute',
    borderRadius: windowWidth * 0.02,
    width: windowWidth * 0.85,
    height: windowWidth * 0.17,
  },
  loadMore: {
    backgroundColor: '#BB902C',
    alignSelf: 'center',
    width: windowWidth * 0.38,
    height: windowWidth * 0.11,
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '4%',
  },
  loadMoreLabel: {
    color: 'white',
    fontSize: windowWidth * 0.044,
    fontFamily: 'OpenSans-Bold',
  },
});
