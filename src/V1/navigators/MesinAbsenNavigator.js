/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

// import Wisata screens
import HomeMesinAbsen from '../screens/MesinAbsen/Home';
import LoginMesinAbsen from '../screens/MesinAbsen/Login';
import RFIDMesinAbsen from '../screens/MesinAbsen/RFID';
import InputSiswaTidakHadir from '../screens/Guru/InputSiswaTidakHadir';
import PilihJenisAbsen from '../screens/MesinAbsen/PilihJenisAbsen';

const Stack = createStackNavigator();
import {horizontalTransition, moderateScale} from '../utils';

export default function MesinAbsenNavigator() {
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
            headerTitle: 'Mesin Absen',
            headerRight: HeaderRight,
          }}
          name="PilihJenisAbsen"
          component={PilihJenisAbsen}
          lazy={true}
        />
        <Stack.Screen
          options={{
            ...horizontalTransition,
            headerShown: false,
            headerRight: HeaderRight,
          }}
          name="RFID"
          component={RFIDMesinAbsen}
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
          name="LoginMesinAbsen"
          component={LoginMesinAbsen}
          lazy={true}
        />
      </Stack.Navigator>
    );
  }
}
