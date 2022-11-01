/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

// import User screens
import SiswaBottomTabs from './SiswaBottomTabs';
import LoginSiswa from '../../screens/Siswa/Login';
import ProfilSiswa from '../../screens/Siswa/Profil';

const Stack = createStackNavigator();
import {
  horizontalTransition,
  windowWidth,
  windowHeight,
  verticalScale,
  moderateScale,
} from '../../utils';

export default function SiswaNavigator() {
  const {pengguna} = useSelector(state => state.auth);

  if (pengguna?.status === 'berhasil') {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SiswaBottomTabs"
          component={SiswaBottomTabs}
          lazy={true}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'PROFIL SAYA',
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
          name="ProfilSiswa"
          component={ProfilSiswa}
        />
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
          name="LoginSiswa"
          component={LoginSiswa}
          lazy={true}
        />
      </Stack.Navigator>
    );
  }
}
