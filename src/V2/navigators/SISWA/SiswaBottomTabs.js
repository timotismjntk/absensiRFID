/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';

// import User screens
import Notifikasi from '../../screens/Siswa/Notifikasi';
import Profil from '../../screens/Siswa/Profil';

// import User screens
import HomeUser from '../../screens/Siswa/Home';
import LogAbsen from '../../screens/Siswa/LogAbsen';
import BeritaSekolah from '../../screens/Siswa/BeritaSekolah';
import InformasiSingkat from '../../screens/Siswa/InformasiSingkat';
import Kegiatan from '../../screens/Siswa/Kegiatan';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import {
  horizontalTransition,
  verticalScale,
  moderateScale,
  windowWidth,
  windowHeight,
} from '../../utils';

function SiswaNavigator() {
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

export default function SiswaBottomTabs() {
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
    <Tab.Navigator
      detachInactiveScreens={true}
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: 'rgba(0,0,0,0.15)',
        lazy: true,
        unmountOnBlur: true,
        tabBarStyle: {
          height: verticalScale(70),
          borderRadius: moderateScale(12),
          overflow: 'hidden',
          marginBottom: '4%',
          elevation: 100,
          width: '95%',
          alignSelf: 'center',
          backgroundColor: '#1b6cfc',
        },
        tabBarButton: props => <RectButton {...props} />,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color: bottomColor}) => (
            <MaterialIcons
              name="home"
              size={focused ? size + moderateScale(8) : size + moderateScale(4)}
              style={{paddingTop: '2%'}}
              color={bottomColor}
            />
          ),
          headerShown: false,
          tabBarLabel: ({focused, size, color: bottomColor}) => (
            <Text
              style={{
                fontSize: focused ? moderateScale(13) : moderateScale(12),
                marginBottom: '4%',
                color: bottomColor,
              }}>
              Home
            </Text>
          ),
        }}
        name="SiswaNavigator"
        component={SiswaNavigator}
        lazy={true}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color: bottomColor}) => (
            <MaterialIcons
              name="notifications"
              size={focused ? size + moderateScale(8) : size + moderateScale(5)}
              style={{paddingTop: '2%'}}
              color={bottomColor}
            />
          ),
          headerTitle: 'Notifikasi',
          tabBarLabel: ({focused, size, color: bottomColor}) => (
            <Text
              style={{
                fontSize: focused ? moderateScale(13) : moderateScale(12),
                marginBottom: '4%',
                color: bottomColor,
              }}>
              Notifikasi
            </Text>
          ),
          headerRight: HeaderRight,
        }}
        name="Notifikasi"
        component={Notifikasi}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, size, color: bottomColor}) => (
            <MaterialIcons
              name="person"
              size={focused ? size + moderateScale(8) : size + moderateScale(5)}
              style={{paddingTop: '2%'}}
              color={bottomColor}
            />
          ),
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
          tabBarLabel: ({focused, size, color: bottomColor}) => (
            <Text
              style={{
                fontSize: focused ? moderateScale(13) : moderateScale(12),
                marginBottom: '4%',
                color: bottomColor,
              }}>
              Profil
            </Text>
          ),
        }}
        name="Profil"
        component={Profil}
      />
    </Tab.Navigator>
  );
}
