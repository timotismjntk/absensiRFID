/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import User screens
import HomeGaleri from '../../screens/GALERI/Home';
import SingleGalery from '../../screens/GALERI/SingleGalery';
import LightBoxGalery from '../../screens/GALERI/LightBoxGalery';

const Stack = createStackNavigator();
import {horizontalTransition, windowWidth, windowHeight} from '../../utils';

export default function GaleriNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTitleAlign: 'center',
          headerTitle: 'GALERI',
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
        name="HomeGaleri"
        component={HomeGaleri}
      />
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTitleAlign: 'center',
          headerTitle: 'GALERI',
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
        name="SingleGalery"
        component={SingleGalery}
      />
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTitleAlign: 'center',
          headerTitle: '',
          headerTintColor: 'white',
          headerTransparent: true,
        }}
        name="LightBoxGalery"
        component={LightBoxGalery}
      />
    </Stack.Navigator>
  );
}
