import React from 'react';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

// import Wisata screens
import HomeMesinAbsen from '../screens/MesinAbsen/Home';
import LoginMesinAbsen from '../screens/MesinAbsen/Login';
import RFIDMesinAbsen from '../screens/MesinAbsen/RFID';

const Stack = createStackNavigator();

export default function MesinAbsenNavigator() {
  const horizontalTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };
  // call accesscode stored in mmkv storage
  const {mesinAbsen} = useSelector(state => state.auth);

  if (mesinAbsen?.status === 'berhasil') {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{...horizontalTransition, headerShown: false}}
          name="HomeMesinAbsen"
          component={HomeMesinAbsen}
          lazy={true}
        />
        <Stack.Screen
          options={{
            ...horizontalTransition,
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitle: 'ABSEN RFID',
            headerTitleStyle: {
              fontFamily: 'OpenSans-SemiBold',
            },
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
          options={{...horizontalTransition, headerShown: false}}
          name="LoginMesinAbsen"
          component={LoginMesinAbsen}
          lazy={true}
        />
      </Stack.Navigator>
    );
  }
}
