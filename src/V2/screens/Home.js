/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StatusBar,
  Image,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Text,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {DetailsHeaderScrollView} from 'react-native-sticky-parallax-header';

import Menu from '../components/Menu';

import Roles from '../components/Roles';
import Slider from '../components/Slider';

import {horizontalTransition, windowWidth, windowHeight} from '../utils';

export default function Home({navigation}) {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <FlatList
        ListHeaderComponent={
          <View>
            <View
              style={{
                width: windowWidth * 0.65,
                height: windowWidth * 0.3,
                alignItems: 'center',
                justifyContent: 'center',
                // height: windowHeight * 0.1,
                overflow: 'hidden',
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'center',
                }}
                source={require('../assets/logo.png')}
              />
            </View>
            <Text style={styles.headerTitle}>Anda akan masuk sebagai</Text>
          </View>
        }
        ListHeaderComponentStyle={{alignItems: 'center'}}
        data={[
          {
            fn: () => navigation.navigate('GuruNavigator'),
            icon: require('../assets/icons/guru.png'),
            title: 'Guru',
          },
          {
            fn: () => navigation.navigate('SiswaNavigator'),
            icon: require('../assets/icons/siswa&wali.png'),
            title: 'Siswa / Wali',
          },
          {
            fn: () => navigation.navigate('GuruNavigator'),
            icon: require('../assets/icons/public.png'),
            title: 'Publik',
          },
          {
            fn: () => navigation.navigate('MesinAbsenNavigator'),
            icon: require('../assets/icons/mesin.png'),
            title: 'Mesin RFID',
          },
        ]}
        numColumns={2}
        contentContainerStyle={styles.flatlistContainer}
        columnWrapperStyle={{
          flex: 1,
          width: '100%',
          justifyContent: 'space-evenly',
          marginBottom: '3%',
          paddingHorizontal: '15%',
        }}
        renderItem={({item, index}) => (
          <RectButton style={styles.defaultBtn} onPress={() => item.fn()}>
            <View style={styles.defaultIconWrapper}>
              <Image style={styles.defaultIcon} source={item.icon} />
            </View>
            <Text style={styles.defaultBtnTitle}>{item.title}</Text>
          </RectButton>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerTitle: {
    color: 'black',
    fontSize: windowWidth * 0.038,
    alignSelf: 'center',
    marginBottom: '6%',
    fontFamily: 'OpenSans-Regular',
  },
  flatlistContainer: {
    width: '100%',
    minHeight: windowHeight,
    justifyContent: 'center',
  },
  defaultBtn: {
    justifyContent: 'center',
    width: windowWidth * 0.3,
    height: windowWidth * 0.26,
    borderRadius: windowWidth * 0.03,
    alignItems: 'center',
    backgroundColor: '#3B3B3B',
  },
  defaultBtnTitle: {
    color: 'white',
    fontSize: windowWidth * 0.034,
    paddingHorizontal: '3%',
    textAlign: 'center',
    marginTop: '4%',
    fontFamily: 'OpenSans-Regular',
  },
  defaultIconWrapper: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    marginBottom: '2%',
    elevation: 10,
  },
  defaultIcon: {
    width: '100%',
    height: '100%',
  },
});
