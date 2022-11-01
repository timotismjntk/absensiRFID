/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import User screens
import Informasi from '../../screens/INFORMASI/Informasi';

const Stack = createStackNavigator();
import {horizontalTransition, windowWidth, windowHeight} from '../../utils';

export default function InformasiNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTitleAlign: 'center',
          headerTitle: 'INFORMASI',
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
        name="Informasi"
        component={Informasi}
      />
    </Stack.Navigator>
  );
}
