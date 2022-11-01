/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
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
import Menu from '../../components/Menu';

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
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <Menu
        header={
          <View style={styles.header}>
            <View style={styles.profilPictureWrapper} />
            <Text style={styles.userNameTitle}>
              Adam Kurniawan Margolang, S.Kom
            </Text>
          </View>
        }
        data={[
          {
            icon: require('../../assets/icons2/web.png'),
            subtitle: '',
            title: 'Web Sekolah',
            fn: () => null,
          },
          {
            icon: require('../../assets/icons2/boy.png'),
            subtitle: 'Lihat dan sesuaikan data profil Anda',
            title: 'Profil Saya',
            fn: () => navigation.navigate('ProfilGuru'),
          },
          {
            icon: require('../../assets/icons2/qr-code-scan.png'),
            subtitle: 'Absen masuk dan pulang dengan scan barcode',
            title: 'Absen',
            fn: () => navigation.navigate('AbsenGuru'),
          },
          {
            icon: require('../../assets/icons2/list.png'),
            subtitle: 'Lihat log absen Anda setiap hari',
            title: 'Log Absen',
            fn: () => navigation.navigate('LogAbsen'),
          },
          {
            icon: require('../../assets/icons2/consulting.png'),
            subtitle: 'Kelola data konseling siswa (khusus Guru BK)',
            title: 'Konseling',
            fn: () => navigation.navigate('ProfilGuru'),
          },
          {
            icon: require('../../assets/icons2/attendance.png'),
            subtitle: 'Kelola absensi siswa Anda',
            title: 'Absen Siswa',
            fn: () => navigation.navigate('AbsenSiswa'),
          },
          {
            icon: require('../../assets/icons2/idea.png'),
            subtitle: 'Kelola data akademik siswa',
            title: 'Akademik',
            fn: () => navigation.navigate('ProfilGuru'),
          },
          {
            icon: require('../../assets/icons2/teacher.png'),
            subtitle: 'Lihat data seluruh Guru, Staf, dan Siswa',
            title: 'Data Guru',
            fn: () => navigation.navigate('DataGuru'),
          },
          {
            icon: require('../../assets/icons2/group-class.png'),
            subtitle: 'Lihat data seluruh Guru, Staf, dan Siswa',
            title: 'Data Siswa',
            fn: () => navigation.navigate('DataSiswa'),
          },
          {
            icon: require('../../assets/icons2/payroll.png'),
            subtitle: 'Lihat amprah gaji Anda setiap bulan',
            title: 'Amprah Gaji',
            fn: () => navigation.navigate('ProfilGuru'),
          },
          {
            icon: require('../../assets/icons2/newspaper3.png'),
            subtitle: 'Cek update berita dan informasi sekolah',
            title: 'Berita',
            fn: () => navigation.navigate('BeritaNavigator'),
          },
          {
            icon: require('../../assets/icons2/info.png'),
            subtitle: 'Cek update berita dan informasi sekolah',
            title: 'Informasi',
            fn: () => navigation.navigate('InformasiNavigator'),
          },
          {
            icon: require('../../assets/icons2/blog.png'),
            subtitle: 'Lihat tulisan guru',
            title: 'Blog Guru',
            fn: () =>
              navigation.navigate('BlogNavigator', {
                screen: 'Blog',
                params: {title: 'BLOG GURU'},
              }),
          },
          {
            icon: require('../../assets/icons2/blogging.png'),
            subtitle: 'Lihat tulisan siswa',
            title: 'Blog Siswa',
            fn: () =>
              navigation.navigate('BlogNavigator', {
                screen: 'Blog',
                params: {title: 'BLOG SISWA'},
              }),
          },
          {
            icon: require('../../assets/icons2/calendar.png'),
            subtitle: 'Lihat agenda acara sekolah',
            title: 'Agenda',
            fn: () => navigation.navigate('Agenda'),
          },
          {
            icon: require('../../assets/icons2/picture.png'),
            subtitle: 'Lihat galeri foto sekolah',
            title: 'Galeri',
            fn: () => navigation.navigate('GaleriNavigator'),
          },
          {
            icon: require('../../assets/icons2/students2.png'),
            subtitle: 'Lihat dan sesuaikan data profil Anda',
            title: 'Data Alumni',
            fn: () => navigation.navigate('DataAlumni'),
          },
          {
            icon: require('../../assets/icons2/whatsapp1.png'),
            subtitle: '',
            title: 'Bantuan',
            fn: () => navigation.navigate('DataAlumni'),
          },
        ]}
        numColumn={4}
        theme="white"
        rightIconBackgroundColor="#3B3B3B"
        useRightIcon={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: windowHeight * 0.27,
    backgroundColor: '#3B3B3B',
    borderBottomLeftRadius: windowHeight * 0.07,
    borderBottomRightRadius: windowHeight * 0.07,
    marginBottom: '8%',
    justifyContent: 'center',
  },
  profilPictureWrapper: {
    backgroundColor: 'white',
    height: windowHeight * 0.12,
    width: windowHeight * 0.12,
    alignSelf: 'center',
    borderRadius: windowHeight * 0.12,
    marginBottom: '3%',
  },
  userNameTitle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: windowWidth * 0.042,
    fontFamily: 'OpenSans-Bold',
  },
});
