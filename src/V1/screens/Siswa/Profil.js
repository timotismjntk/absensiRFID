import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {windowWidth, windowHeight} from '../../utils';

export default function Profil() {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.fotoProfilWrapper} />
        <Text style={styles.nama}>John Doe</Text>
        <Text style={styles.nik}>NIK: 12345678</Text>
        <Text style={styles.namaWali}>Wali Kelas: Deddy Corbuzier</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    minHeight: windowHeight * 0.8,
    padding: '3%',
  },
  fotoProfilWrapper: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    borderRadius: (windowWidth * 0.4) / 2,
    backgroundColor: 'grey',
    alignSelf: 'center',
  },
  nama: {
    color: 'rgba(0,0,0,0.9)',
    fontSize: windowWidth * 0.07,
    fontFamily: 'OpenSans-Bold',
    alignSelf: 'center',
    marginTop: '5%',
  },
  nik: {
    color: 'rgba(0,0,0,0.9)',
    fontSize: windowWidth * 0.04,
    fontFamily: 'OpenSans-SemiBold',
    alignSelf: 'center',
    marginTop: '2%',
  },
  namaWali: {
    color: 'rgba(0,0,0,0.9)',
    fontSize: windowWidth * 0.04,
    fontFamily: 'OpenSans-SemiBold',
    alignSelf: 'center',
    marginTop: '2%',
  },
});
