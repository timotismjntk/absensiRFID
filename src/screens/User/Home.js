/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {StatusBar, StyleSheet, Text, Linking, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {windowWidth, windowHeight} from '../../utils';

import {logoutPengguna} from '../../store/reducer/auth';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const {pengguna} = useSelector(state => state.auth);

  const logout = useCallback(() => {
    dispatch(logoutPengguna());
  }, []);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      <View style={styles.wrapper}>
        <View style={styles.fotoUser} />
        <Text style={styles.namaUser}>
          {pengguna?.result?.nama || 'Memuat...'}
        </Text>
        <Text style={styles.nikUser}>
          NIK: {pengguna?.result?.nik || 'Memuat...'}
        </Text>
        <RectButton
          onPress={() => navigation.navigate('LogAbsen')}
          style={styles.btn}>
          <Text style={styles.btnTitle}>Log Absen</Text>
        </RectButton>
        <RectButton
          onPress={() => navigation.navigate('BeritaSekolah')}
          style={styles.btn}>
          <Text style={styles.btnTitle}>Berita Sekolah</Text>
        </RectButton>
        <RectButton
          onPress={() => navigation.navigate('InformasiSingkat')}
          style={styles.btn}>
          <Text style={styles.btnTitle}>Informasi Singkat</Text>
        </RectButton>
        <RectButton
          onPress={() => Linking.openURL('https://google.com')}
          style={styles.btn}>
          <Text style={styles.btnTitle}>Kunjungi Website Sekolah</Text>
        </RectButton>
        <RectButton onPress={logout} style={styles.btn}>
          <Text style={styles.btnTitle}>Keluar</Text>
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
    paddingHorizontal: windowWidth * 0.15,
    alignItems: 'center',
  },
  fotoUser: {
    borderRadius: (windowWidth * 0.28) / 2,
    backgroundColor: 'white',
    width: windowWidth * 0.28,
    height: windowWidth * 0.28,
    marginBottom: '6%',
  },
  namaUser: {
    fontSize: windowWidth * 0.055,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
  },
  nikUser: {
    fontSize: windowWidth * 0.055,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    marginBottom: '3%',
  },
  btn: {
    backgroundColor: '#E3A400',
    padding: '4%',
    paddingHorizontal: '5%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    marginTop: '4%',
  },
  btnTitle: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontFamily: 'OpenSans-SemiBold',
  },
  logoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: windowHeight * 0.07,
    right: windowHeight * 0.02,
    padding: '2%',
  },
  logoutTitle: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    paddingRight: '2%',
    fontFamily: 'OpenSans-SemiBold',
  },
  iconLogout: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
