import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {windowWidth} from '../utils';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      <View style={styles.wrapper}>
        <Text style={styles.headerTitle}>
          Sistem Informasi Absensi{'\n'}Elektronik Sekolah
        </Text>
        <Text style={styles.title}>Perangkat Ini Digunakan Untuk:</Text>
        <RectButton
          onPress={() => navigation.navigate('MesinAbsenNavigator')}
          style={styles.btn}>
          <Text style={styles.btnTitle}>Mesin Absen</Text>
        </RectButton>
        <RectButton
          onPress={() => navigation.navigate('UserNavigator')}
          style={styles.btn}>
          <Text style={styles.btnTitle}>Pengguna</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172B36',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#172B36',
    paddingHorizontal: windowWidth * 0.08,
  },
  headerTitle: {
    fontSize: windowWidth * 0.055,
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  title: {
    fontSize: windowWidth * 0.04,
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    marginTop: '5%',
  },
  btn: {
    backgroundColor: '#E3A400',
    padding: '6%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    marginTop: '5%',
  },
  btnTitle: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontFamily: 'OpenSans-SemiBold',
  },
});
