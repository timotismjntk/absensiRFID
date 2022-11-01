/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// import User screens
import HomeUser from '../../screens/Siswa/Home';
import LogAbsen from '../../screens/Siswa/LogAbsen';
import BeritaSekolah from '../../screens/Siswa/BeritaSekolah';
import InformasiSingkat from '../../screens/Siswa/InformasiSingkat';
import Kegiatan from '../../screens/Siswa/Kegiatan';

const Stack = createStackNavigator();
import {
  horizontalTransition,
  windowWidth,
  verticalScale,
  moderateScale,
} from '../../utils';

export default function SiswaNavigator() {
  const HeaderRight = () => (
    <View
      style={{
        width: moderateScale(100),
        marginRight: '4%',
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
        source={require('../../assets/logo.png')}
      />
    </View>
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'OpenSans-SemiBold',
            fontSize: moderateScale(15),
          },
          headerLeft: null,
          headerTitle: 'Selamat datang John',
          headerRight: HeaderRight,
        }}
        name="HomeUser"
        component={HomeUser}
        lazy={true}
      />
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTitle: 'Log Absen',
          headerStyle: {
            elevation: 0,
          },
          headerRight: HeaderRight,
        }}
        name="LogAbsen"
        component={LogAbsen}
        lazy={true}
      />
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTitle: 'Berita Sekolah',
          headerStyle: {
            elevation: 0,
          },
          headerRight: HeaderRight,
        }}
        name="BeritaSekolah"
        component={BeritaSekolah}
        lazy={true}
      />
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTitle: 'Informasi Singkat',
          headerStyle: {
            elevation: 0,
          },
          headerRight: HeaderRight,
        }}
        name="InformasiSingkat"
        component={InformasiSingkat}
        lazy={true}
      />
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTitle: 'Kegiatan',
          headerStyle: {
            elevation: 0,
          },
          headerRight: HeaderRight,
        }}
        name="Kegiatan"
        component={Kegiatan}
        lazy={true}
      />
    </Stack.Navigator>
  );
}
