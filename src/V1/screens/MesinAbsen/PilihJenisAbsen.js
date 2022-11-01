/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, Image, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
// import LoadingModal from '../../components/LoadingModal';

import {windowWidth, windowHeight} from '../../utils';

import {
  logoutMesinAbsen,
  // clearFailedAbsenFromDb,
  // clearStatusFailedAbsen,
  // scanRFID,
} from '../../redux/reducer/auth';
import LinearButton from '../../components/LinearButton';

export default function PilihJenisAbsen({navigation}) {
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch(logoutMesinAbsen());
  }, []);
  // const [loading, setLoading] = useState(false);

  const pilihAbsen = useCallback(value => {
    navigation.navigate('RFID', {jenis_absen: value});
  }, []);

  // const {dataAbsenGagal} = useSelector(state => state.auth);

  // const sentAbsenFailed = useCallback(async () => {
  //   try {
  //     dataAbsenGagal.forEach(item => {
  //       dispatch(scanRFID(item));
  //     });
  //   } catch (e) {
  //     const timer = setTimeout(() => {
  //       setLoading(false);
  //     }, 1000);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [dataAbsenGagal]);

  // useEffect(() => {
  //   setLoading(true);
  //   sentAbsenFailed();
  //   dispatch(clearFailedAbsenFromDb());
  //   dispatch(clearStatusFailedAbsen());
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      {/* <LoadingModal open={loading} close={() => null} /> */}
      <RectButton onPress={logout} style={styles.logoutButton}>
        <Text style={styles.logoutTitle}>Logout</Text>
        <View style={styles.iconLogout}>
          <Image
            style={styles.image}
            source={require('../../assets/logout.png')}
          />
        </View>
      </RectButton>
      <View style={styles.wrapper}>
        <Text style={styles.headerTitle}>Pilih Jenis Absen</Text>
        <LinearButton style={styles.linear}>
          <RectButton
            onPress={() => pilihAbsen('Absen Masuk')}
            style={styles.btn}>
            <Text style={styles.btnTitle}>Absen Masuk</Text>
          </RectButton>
        </LinearButton>
        <LinearButton style={styles.linear}>
          <RectButton
            onPress={() => pilihAbsen('Absen Pulang')}
            style={styles.btn}>
            <Text style={styles.btnTitle}>Absen Pulang</Text>
          </RectButton>
        </LinearButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247,247,247)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: windowWidth * 0.08,
  },
  headerTitle: {
    fontSize: windowWidth * 0.05,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
  },
  linear: {
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    marginTop: '5%',
  },
  btn: {
    padding: '4%',
    paddingHorizontal: '5%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
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
    top: windowHeight * 0.05,
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
