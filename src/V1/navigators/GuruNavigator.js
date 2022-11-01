/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

// import Wisata screens
import LoginGuru from '../screens/Guru/Login';
import HomeGuru from '../screens/Guru/Home';
import InputSiswaTidakHadir from '../screens/Guru/InputSiswaTidakHadir';

const Stack = createStackNavigator();
import {horizontalTransition, moderateScale} from '../utils';
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
        source={require('../assets/logo.png')}
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
            headerLeft: null,
            headerTitle: 'Selamat datang Bu Ida',
            headerRight: HeaderRight,
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
            headerTintColor: 'rgba(0,0,0,0.6)',
          }}
          name="LoginGuru"
          component={LoginGuru}
          lazy={true}
        />
      </Stack.Navigator>
    );
  }
}
