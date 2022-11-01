/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import LoginGuru from '../../screens/Guru/Login';
import LupaPasswordGuru from '../../screens/Guru/LupaPassword';
import HomeGuru from '../../screens/Guru/Home';
import InputSiswaTidakHadir from '../../screens/Guru/InputSiswaTidakHadir';
import ProfilGuru from '../../screens/Guru/Profil';
import ProfilGuruLain from '../../screens/Guru/ProfilGuru';
import AbsenGuru from '../../screens/Guru/AbsenGuru';
import AbsenSiswa from '../../screens/Guru/AbsenSiswa';
import DataGuruSiswa from '../../screens/Guru/DataGuruSiswa';
import LogAbsen from '../../screens/Guru/LogAbsen';
import LogAbsenSiswa from '../../screens/Guru/LogAbsenSiswa';
import DataSiswa from '../../screens/Guru/DataSiswa';
import ProfilSiswa from '../../screens/Guru/ProfilSiswa';
import DataGuru from '../../screens/Guru/DataGuru';
import TambahIzinSiswa from '../../screens/Guru/TambahIzinSiswa';
import Agenda from '../../screens/Guru/Agenda';
import DataAlumni from '../../screens/Guru/DataAlumni';
import ProfilAlumni from '../../screens/Guru/ProfilAlumni';

const Stack = createStackNavigator();
import {
  horizontalTransition,
  moderateScale,
  windowHeight,
  windowWidth,
} from '../../utils';
import {Image, View} from 'react-native';

export default function GuruNavigator() {
  // call accesscode stored in mmkv storage
  const {mesinAbsen, isLoginMesinModalSuccessOpen} = useSelector(
    state => state.auth,
  );

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

  if (mesinAbsen?.status !== 'berhasil') {
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
            headerShown: false,
          }}
          name="HomeGuru"
          component={HomeGuru}
          lazy={true}
        />
        <Stack.Screen
          options={{
            ...horizontalTransition,
            headerTitle: 'Siswa Tidak Hadir',
            headerRight: HeaderRight,
          }}
          name="InputSiswaTidakHadir"
          component={InputSiswaTidakHadir}
          lazy={true}
        />
        {[
          {
            id: 1,
            headerTitle: 'PROFIL SAYA',
            name: 'ProfilGuru',
            component: ProfilGuru,
          },
          {
            id: 2,
            headerTitle: 'ABSEN MASUK / PULANG',
            name: 'AbsenGuru',
            component: AbsenGuru,
          },
          {
            id: 3,
            headerTitle: 'ABSEN SISWA',
            name: 'AbsenSiswa',
            component: AbsenSiswa,
          },
          {
            id: 4,
            headerTitle: 'DATA GURU DAN SISWA',
            name: 'DataGuruSiswa',
            component: DataGuruSiswa,
          },
          {
            id: 5,
            headerTitle: 'LOG ABSEN',
            name: 'LogAbsen',
            component: LogAbsen,
          },
          {
            id: 6,
            headerTitle: 'LOG ABSEN SISWA',
            name: 'LogAbsenSiswa',
            component: LogAbsenSiswa,
          },
          {
            id: 7,
            headerTitle: 'DATA SISWA',
            name: 'DataSiswa',
            component: DataSiswa,
          },
          {
            id: 8,
            headerTitle: 'PROFIL SISWA',
            name: 'ProfilSiswa',
            component: ProfilSiswa,
          },
          {
            id: 9,
            headerTitle: 'DATA GURU',
            name: 'DataGuru',
            component: DataGuru,
          },
          {
            id: 10,
            headerTitle: 'TAMBAH IZIN SISWA',
            name: 'TambahIzinSiswa',
            component: TambahIzinSiswa,
          },
          {
            id: 11,
            headerTitle: 'PROFIL GURU',
            name: 'ProfilGuruLain',
            component: ProfilGuruLain,
          },
          {
            id: 12,
            headerTitle: 'AGENDA',
            name: 'Agenda',
            component: Agenda,
          },
          {
            id: 13,
            headerTitle: 'DATA ALUMNI',
            name: 'DataAlumni',
            component: DataAlumni,
          },
          {
            id: 14,
            headerTitle: 'PROFIL ALUMNI',
            name: 'ProfilAlumni',
            component: ProfilAlumni,
          },
        ].map(item => (
          <Stack.Screen
            key={item.id}
            options={{
              ...horizontalTransition,
              headerTitleAlign: 'center',
              headerTitle: item.headerTitle,
              headerTintColor: 'white',
              headerTitleStyle: {
                fontFamily: 'OpenSans-SemiBold',
                top: -windowHeight * 0.01,
                fontSize: windowWidth * 0.042,
              },
              headerLeftContainerStyle: {
                top: -windowHeight * 0.01,
              },
              headerStyle: {
                backgroundColor: '#3B3B3B',
                borderBottomLeftRadius: windowWidth * 0.1,
                borderBottomRightRadius: windowWidth * 0.1,
              },
              headerStatusBarHeight: windowHeight * 0.05,
            }}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            ...horizontalTransition,
            headerTitle: '',
            headerTransparent: true,
          }}
          name="LoginGuru"
          component={LoginGuru}
          lazy={true}
        />
        <Stack.Screen
          options={{
            ...horizontalTransition,
            headerTitle: '',
            headerTransparent: true,
          }}
          name="LupaPasswordGuru"
          component={LupaPasswordGuru}
          lazy={true}
        />
      </Stack.Navigator>
    );
  }
}
