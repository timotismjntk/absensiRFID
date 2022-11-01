import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import User screens
import ScanBarcode from '../../screens/BARCODE/QrReader';

const Stack = createStackNavigator();
import {horizontalTransition, windowWidth, windowHeight} from '../../utils';

export default function BarcodeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          ...horizontalTransition,
          headerTitleAlign: 'center',
          headerTitle: 'SCAN BARCODE',
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
        name="ScanBarcode"
        component={ScanBarcode}
      />
    </Stack.Navigator>
  );
}
