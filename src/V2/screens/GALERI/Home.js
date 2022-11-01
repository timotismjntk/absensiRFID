/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image, FlatList, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {windowWidth, windowHeight} from '../../utils';

export default function Home({navigation}) {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={[
          {
            title:
              'Galeri Kumpulan Foto Kegiatan Perayaan HUT RI ke 77 Tahun 2022 di SMA Negeri 1 Aek Kuasan',
          },
          {title: 'Foto-foto Tim Drumband Tahun...'},
          {
            title:
              'Galeri Kumpulan Foto Kegiatan Perayaan HUT RI ke 77 Tahun 2022 di SMA Negeri 1 Aek Kuasan',
          },
          {title: 'Foto-foto Tim Drumband Tahun...'},
          {
            title:
              'Galeri Kumpulan Foto Kegiatan Perayaan HUT RI ke 77 Tahun 2022 di SMA Negeri 1 Aek Kuasan',
          },
          {title: 'Foto-foto Tim Drumband Tahun...'},
        ]}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({item, index}) => (
          <View style={{width: windowWidth * 0.34}}>
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
            </View>
            <Text numberOfLines={2} style={styles.imageTitle}>
              {item.title}
            </Text>
            <RectButton
              rippleColor={'white'}
              style={styles.button}
              onPress={() =>
                navigation.navigate('SingleGalery', {title: item.title})
              }
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
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: '4%',
    marginBottom: '5%',
  },
  defaultItem: {
    marginBottom: '4%',
    borderRadius: windowWidth * 0.02,
    width: windowWidth * 0.34,
    height: windowWidth * 0.36,
    overflow: 'hidden',
    flexDirection: 'row',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B3B3B',
  },
  defaultIconWrapper: {
    width: windowWidth * 0.28,
    height: windowWidth * 0.28,
    overflow: 'hidden',
  },
  imageTitle: {
    color: 'black',
    fontSize: windowWidth * 0.032,
    fontFamily: 'OpenSans-SemiBold',
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
    width: '100%',
    height: '100%',
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
