import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
import {horizontalTransition} from '../utils';

// import Home screens
import Home from '../screens/Home';

// import navigators
import MesinAbsenNavigator from './MesinAbsenNavigator';
import UserNavigator from './UserNavigator';

export default function RootNavigator() {
  const {pengguna, isLoginUserModalSuccessOpen} = useSelector(
    state => state.auth,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {pengguna?.status === 'berhasil' ? (
          <Stack.Screen
            options={{...horizontalTransition, headerShown: false}}
            name="UserNavigator"
            component={UserNavigator}
            lazy={true}
          />
        ) : (
          <>
            <Stack.Screen
              options={{...horizontalTransition, headerShown: false}}
              name="Home"
              component={Home}
              lazy={true}
            />
            <Stack.Screen
              options={{...horizontalTransition, headerShown: false}}
              name="UserNavigator"
              component={UserNavigator}
              lazy={true}
            />
            <Stack.Screen
              options={{...horizontalTransition, headerShown: false}}
              name="MesinAbsenNavigator"
              component={MesinAbsenNavigator}
              lazy={true}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
