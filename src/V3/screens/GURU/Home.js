/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useRef} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';

import Menu from '../../components/Menu';

import {
  windowWidth,
  windowHeight,
  subscribeFromTopic,
  unsubscribeFromTopic,
  cancelAllLocalNotifications,
  removeAllDeliveredNotifications,
} from '../../utils';

import {logoutGuru} from '../../redux/reducer/GURU/auth';
import {getProfilSaya} from '../../redux/reducer/GURU/profilSaya';
import {clearlogAbsenGuru} from '../../redux/reducer/GURU/logAbsen';
import PushNotification from 'react-native-push-notification';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const {authGuru = {}} = useSelector(state => state.authGuru) || {};
  const {user_id = ''} = authGuru?.data || {};
  const {profilSaya = {}} = useSelector(state => state.profilSayaGuru) || {};
  const {nama = '', foto_profil = '', website_id = ''} = profilSaya?.data || {};

  useEffect(() => {
    if (user_id?.length > 0 && website_id?.length > 0) {
      subscribeFromTopic('userById' + user_id);
      subscribeFromTopic('userBySekolah' + website_id);
      subscribeFromTopic('guruBySekolah' + website_id);
      subscribeFromTopic('topics_global');
    }
    PushNotification.getDeliveredNotifications(notification => {
      if (notification?.length > 0) {
        notification?.forEach(data => {
          setTimeout(() => {
            PushNotification.localNotification({
              id: String(data?.identifier || ''),
              autoCancel: true,
              channelId: 'Sekoolah.id',
              title: data?.title,
              message: data?.body,
              data: data?.userInfo,
              smallIcon: 'ic_notification',
              bigPictureUrl: data?.bigPictureUrl,
              largeIconUrl: data?.largeIconUrl,
              vibrate: true,
              vibration: 1000,
              playSound: true,
              invokeApp: true,
              color: '#0099e5',
              allowWhileIdle: true,
              priority: 'max',
              visibility: 'public',
              importance: 'max',
            });
            const clicked = data?.userInteraction;
            if (clicked) {
              data?.data?.link && Linking.openURL(data?.data?.link);
              PushNotification.cancelLocalNotification({id: data?.id});
            }
          }, 250);
        });
      }
    });
  }, [user_id, website_id]);

  useFocusEffect(
    useCallback(() => {
      if (user_id) {
        dispatch(getProfilSaya({user_id}));
      }
    }, [user_id]),
  );

  useEffect(() => {
    if (profilSaya?.pesan === 'User tidak terdaftar') {
      logout();
    }
  }, [profilSaya, user_id, website_id]);

  const logout = useCallback(() => {
    unsubscribeFromTopic(user_id);
    unsubscribeFromTopic('userBySekolah' + website_id);
    unsubscribeFromTopic('guruBySekolah' + website_id);
    unsubscribeFromTopic('topics_global');
    cancelAllLocalNotifications();
    removeAllDeliveredNotifications();
    dispatch(logoutGuru());
    dispatch(clearlogAbsenGuru());
  }, [user_id]);

  const comingSoonAlert = useCallback(() => {
    Alert.alert('Info', 'Dalam proses pengembangan.', [
      {text: 'OK', onPress: () => null},
    ]);
  }, []);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <Menu
        header={
          <View
            style={{
              overflow: 'hidden',
              marginBottom: '8%',
            }}>
            <ImageBackground
              source={require('../../assets/icons2/headerBackground.png')}
              resizeMode="stretch"
              imageStyle={{
                resizeMode: 'stretch',
                height: '100%',
                width: '100%',
                borderBottomLeftRadius: windowHeight * 0.06,
                borderBottomRightRadius: windowHeight * 0.06,
              }}
              style={styles.header}>
              <View style={styles.profilPictureWrapper}>
                {foto_profil ? (
                  <Image
                    source={{uri: foto_profil}}
                    style={styles.profilPicture}
                  />
                ) : (
                  <MaterialIcons
                    name="person"
                    size={windowWidth * 0.14}
                    color="#BDBDBD"
                  />
                )}
              </View>
              <RectButton style={styles.logout} onPress={logout}>
                <Text style={styles.logoutLabel}>Logout</Text>
              </RectButton>
              <Text style={styles.userNameTitle}>{nama}</Text>
            </ImageBackground>
          </View>
        }
        data={[
          {
            icon: require('../../assets/icons2/web.png'),
            subtitle: '',
            title: 'Web Sekolah',
            fn: () =>
              authGuru?.data?.domain_website &&
              Linking.openURL('https://' + authGuru?.data?.domain_website),
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
            fn: () => navigation.navigate('MulaiAbsenGuru'),
          },
          {
            icon: require('../../assets/icons2/list.png'),
            subtitle: 'Lihat log absen Anda setiap hari',
            title: 'Log Absen',
            fn: () => navigation.navigate('LogAbsen'),
          },
          {
            icon: require('../../assets/icons2/pelanggaran.png'),
            subtitle: '',
            title: 'Pelanggaran',
            fn: () => {
              comingSoonAlert();
              // navigation.navigate('HomePelanggaranSiswa');
            },
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
            fn: () => {
              comingSoonAlert();
              // navigation.navigate('HomeAkademikGuru');
            },
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
            fn: () => {
              comingSoonAlert();
              // navigation.navigate('AmprahGaji');
            },
          },
          {
            icon: require('../../assets/icons2/newspaper3.png'),
            subtitle: 'Cek update berita dan informasi sekolah',
            title: 'Berita',
            fn: () =>
              navigation.navigate('BeritaNavigator', {screen: 'Berita'}),
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
            fn: () => {
              comingSoonAlert();
              // navigation.navigate('BlogNavigator', {
              //   screen: 'Blog',
              //   params: {title: 'BLOG GURU'},
              // });
            },
          },
          {
            icon: require('../../assets/icons2/blogging.png'),
            subtitle: 'Lihat tulisan siswa',
            title: 'Blog Siswa',
            fn: () => {
              comingSoonAlert();
              // navigation.navigate('BlogNavigator', {
              //   screen: 'Blog',
              //   params: {title: 'BLOG SISWA'},
              // });
            },
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
            fn: () => {
              // comingSoonAlert();
              navigation.navigate('GaleriNavigator');
            },
          },
          {
            icon: require('../../assets/icons2/students2.png'),
            subtitle: 'Lihat dan sesuaikan data profil Anda',
            title: 'Data Alumni',
            fn: () => {
              comingSoonAlert();
              // navigation.navigate('DataAlumni');
            },
          },
          {
            icon: require('../../assets/icons2/whatsapp1.png'),
            subtitle: '',
            title: 'Bantuan',
            fn: () => Linking.openURL('https://sekoolah.id/wa'),
          },
        ]}
        numColumn={4}
        backgroundColor="white"
        titleColor="black"
        subtitleColor="black"
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
    justifyContent: 'center',
    borderBottomLeftRadius: windowHeight * 0.06,
    borderBottomRightRadius: windowHeight * 0.06,
    marginBottom: '1%',
  },
  profilPictureWrapper: {
    backgroundColor: 'white',
    height: windowHeight * 0.12,
    width: windowHeight * 0.12,
    alignSelf: 'center',
    borderRadius: windowHeight * 0.12,
    borderWidth: 0.4,
    borderColor: '#A6A6A6',
    marginBottom: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  profilPicture: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userNameTitle: {
    color: 'black',
    alignSelf: 'center',
    fontSize: windowWidth * 0.038,
    fontFamily: 'OpenSans-Bold',
  },
  logout: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 40,
    right: 20,
    backgroundColor: 'grey',
    padding: '0.6%',
    paddingHorizontal: '1%',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutLabel: {
    color: 'white',
    fontSize: windowWidth * 0.03,
  },
});
