/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import User screens
import HomeBerita from '../../screens/BERITA/Home';
import Berita from '../../screens/BERITA/Berita';
import DetailBerita from '../../screens/BERITA/DetailBerita';

const Stack = createStackNavigator();
import {horizontalTransition, windowWidth, windowHeight} from '../../utils';

export default function BeritaNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTitleAlign: 'center',
          headerTitle: 'BERITA',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'OpenSans-Bold',
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
        name="HomeBerita"
        component={HomeBerita}
      />
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTitleAlign: 'center',
          headerTitle: 'BERITA',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'OpenSans-Bold',
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
        name="Berita"
        component={Berita}
      />
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTitleAlign: 'center',
          headerTitle: 'DETAIL BERITA',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'OpenSans-Bold',
            top: -windowHeight * 0.01,
            fontSize: windowWidth * 0.042,
          },
          headerLeftContainerStyle: {
            top: -windowHeight * 0.01,
          },
          headerShadowVisible: false,
          headerTransparent: true,
          headerBackgroundContainerStyle: {
            overflow: 'hidden',
            backgroundColor: '#3B3B3B',
            borderBottomLeftRadius: windowWidth * 0.1,
            borderBottomRightRadius: windowWidth * 0.1,
            height: windowHeight * 0.1,
            position: 'absolute',
            top: windowHeight * 0.03,
          },
          headerStatusBarHeight: windowHeight * 0.05,
        }}
        name="DetailBerita"
        component={DetailBerita}
      />
    </Stack.Navigator>
  );
}
