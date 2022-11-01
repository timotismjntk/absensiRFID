/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image, FlatList, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {windowWidth, windowHeight} from '../../utils';

export default function SingleGalery({route, navigation}) {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ListHeaderComponent={
          <Text style={styles.imageTitle}>{route.params.title}</Text>
        }
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
            <RectButton
              rippleColor={'white'}
              style={styles.button}
              onPress={() => navigation.navigate('LightBoxGalery')}
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
    width: windowWidth * 0.36,
    height: windowWidth * 0.4,
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
    fontSize: windowWidth * 0.038,
    fontFamily: 'OpenSans-Bold',
    alignSelf: 'center',
    marginBottom: '6%',
    paddingHorizontal: '15%',
    textAlign: 'center',
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
