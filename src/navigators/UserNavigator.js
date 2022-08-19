import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

// import User screens
import HomeUser from '../screens/User/Home';
import LoginUser from '../screens/User/Login';
import LogAbsen from '../screens/User/LogAbsen';
import BeritaSekolah from '../screens/User/BeritaSekolah';
import InformasiSingkat from '../screens/User/InformasiSingkat';

const Stack = createStackNavigator();
import {horizontalTransition} from '../utils';

export default function UserNavigator() {
  // call accesscode stored in mmkv storage
  const {pengguna, isLoginUserModalSuccessOpen} = useSelector(
    state => state.auth,
  );

  if (pengguna?.status === 'berhasil' && !isLoginUserModalSuccessOpen) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            ...horizontalTransition,
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: 'white',
          }}
          name="HomeUser"
          component={HomeUser}
          lazy={true}
        />
        <Stack.Screen
          options={{
            ...horizontalTransition,
            headerTintColor: 'white',
            headerTitle: 'Log Absen',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#172B36',
              elevation: 0,
            },
            headerLeft: null,
            headerTitleStyle: {
              fontFamily: 'OpenSans-ExtraBold',
            },
          }}
          name="LogAbsen"
          component={LogAbsen}
          lazy={true}
        />
        <Stack.Screen
          options={{
            ...horizontalTransition,
            headerTintColor: 'white',
            headerTitle: 'Berita Sekolah',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#172B36',
              elevation: 0,
            },
            headerLeft: null,
            headerTitleStyle: {
              fontFamily: 'OpenSans-ExtraBold',
            },
          }}
          name="BeritaSekolah"
          component={BeritaSekolah}
          lazy={true}
        />
        <Stack.Screen
          options={{
            ...horizontalTransition,
            headerTintColor: 'white',
            headerTitle: 'Informasi Singkat',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#172B36',
              elevation: 0,
            },
            headerLeft: null,
            headerTitleStyle: {
              fontFamily: 'OpenSans-ExtraBold',
            },
          }}
          name="InformasiSingkat"
          component={InformasiSingkat}
          lazy={true}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{...horizontalTransition, headerShown: false}}
          name="LoginUser"
          component={LoginUser}
          lazy={true}
        />
      </Stack.Navigator>
    );
  }
}
