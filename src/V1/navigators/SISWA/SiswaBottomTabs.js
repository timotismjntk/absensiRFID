/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import User screens
import SiswaNavigator from './SiswaNavigator';
import Notifikasi from '../../screens/Siswa/Notifikasi';
import Profil from '../../screens/Siswa/Profil';

const Tab = createBottomTabNavigator();
import {
  horizontalTransition,
  verticalScale,
  moderateScale,
  windowWidth,
  windowHeight,
} from '../../utils';

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
          headerTitle: 'Profil',
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
          headerRight: HeaderRight,
        }}
        name="Profil"
        component={Profil}
      />
    </Tab.Navigator>
  );
}
