/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  Linking,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {
  windowWidth,
  windowHeight,
  unsubscribeFromTopic,
  cancelAllLocalNotifications,
  removeAllDeliveredNotifications,
  moderateScale,
  verticalScale,
  scale,
} from '../../utils';

import {logoutPengguna} from '../../redux/reducer/auth';
import LinearButton from '../../components/LinearButton';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const {pengguna} = useSelector(state => state.auth);

  const logout = useCallback(() => {
    unsubscribeFromTopic(pengguna);
    cancelAllLocalNotifications();
    removeAllDeliveredNotifications();
    dispatch(logoutPengguna());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      <View style={styles.wrapper}>
        <LinearButton style={styles.linear}>
          <RectButton
            style={styles.btn}
            onPress={() => navigation.navigate('LogAbsen')}>
            <Text style={styles.btnTitle}>Log Absen</Text>
          </RectButton>
        </LinearButton>
        <LinearButton style={styles.linear}>
          <RectButton
            style={styles.btn}
            onPress={() => navigation.navigate('BeritaSekolah')}>
            <Text style={styles.btnTitle}>Berita Sekolah</Text>
          </RectButton>
        </LinearButton>
        <LinearButton style={styles.linear}>
          <RectButton
            style={styles.btn}
            onPress={() => navigation.navigate('InformasiSingkat')}>
            <Text style={styles.btnTitle}>Informasi Singkat</Text>
          </RectButton>
        </LinearButton>
        <LinearButton style={styles.linear}>
          <RectButton
            style={styles.btn}
            onPress={() => navigation.navigate('Kegiatan')}>
            <Text style={styles.btnTitle}>Kegiatan</Text>
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
  },
  logoutButton: {
    padding: '1.2%',
    paddingHorizontal: '2%',
    borderRadius: windowWidth * 0.01,
    alignSelf: 'flex-end',
    marginRight: '3%',
    elevation: 10,
    marginTop: '2%',
  },
  logoutLabel: {
    color: 'white',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: '7%',
    backgroundColor: 'rgb(247,247,247)',
    justifyContent: 'space-between',
    marginTop: windowHeight * 0.06,
  },
  linear: {
    justifyContent: 'center',
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    marginTop: '4.5%',
    elevation: moderateScale(100),
  },
  btn: {
    justifyContent: 'center',
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    padding: '4%',
    marginTop: '4.5%',
  },
  btnTitle: {
    color: 'white',
    fontSize: moderateScale(13),
    fontFamily: 'OpenSans-Medium',
    textAlign: 'center',
  },
});
