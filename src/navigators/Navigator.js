import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

// import Home screens
import Home from '../screens/Home';

// import navigators
import MesinAbsenNavigator from './MesinAbsenNavigator';
import UserNavigator from './UserNavigator';

export default function RootNavigator() {
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

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{...horizontalTransition, headerShown: false}}
          name="Home"
          component={Home}
          lazy={true}
        />
        <Stack.Screen
          options={{...horizontalTransition, headerShown: false}}
          name="MesinAbsenNavigator"
          component={MesinAbsenNavigator}
          lazy={true}
        />
        <Stack.Screen
          options={{...horizontalTransition, headerShown: false}}
          name="UserNavigator"
          component={UserNavigator}
          lazy={true}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
