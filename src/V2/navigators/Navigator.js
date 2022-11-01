/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PushNotification from 'react-native-push-notification';
import {Image, Linking, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
import {horizontalTransition, windowWidth, windowHeight} from '../utils';

// import Home screens
import Home from '../screens/Home';

// import navigators
import MesinAbsenNavigator from './MESIN/MesinAbsenNavigator';
import SiswaNavigator from './SISWA/SiswaNavigator';
import GuruNavigator from './GURU/GuruNavigator';
import BeritaNavigator from './BERITA/BeritaNavigator';
import InformasiNavigator from './INFORMASI/InformasiNavigator';
import BlogNavigator from './BLOG/BlogNavigator';
import GaleriNavigator from './GALERI/GaleriNavigator';
import BarcodeNavigator from './BARCODE/BarcodeNavigator';

export default function RootNavigator() {
  const {pengguna, isLoginUserModalSuccessOpen} = useSelector(
    state => state.auth,
  );

  const config = {
    screens: {
      UserNavigator: {
        initialRouteName: 'UserNavigator',
        screens: {
          LogAbsen: 'logAbsen',
        },
      },
    },
  };

  const linking = {
    prefixes: ['absensirfid://'],
    config,
    getInitialURL: async () => {
      // check for notification deep linking
      PushNotification.popInitialNotification(notification => {
        // <---- 1
        if (!notification) {
          return;
        }
        const link = notification?.data?.link || null;
        link && Linking.openURL(link);
      });
      // this is the default return
      // return await Linking.getInitialURL();
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        {pengguna?.status === 'berhasil' ? (
          <Stack.Screen
            options={{...horizontalTransition, headerShown: false}}
            name="SiswaNavigator"
            component={SiswaNavigator}
            lazy={true}
          />
        ) : (
          <>
            <Stack.Screen
              options={{
                ...horizontalTransition,
                headerStyle: {
                  backgroundColor: '#3281ff',
                  elevation: 0,
                },
                headerShown: false,
                headerTitle: () => (
                  <View
                    style={{
                      width: windowWidth * 0.5,
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
                ),
              }}
              name="Home"
              component={Home}
              lazy={true}
            />
            <Stack.Screen
              options={{...horizontalTransition, headerShown: false}}
              name="SiswaNavigator"
              component={SiswaNavigator}
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
              name="GuruNavigator"
              component={GuruNavigator}
              lazy={true}
            />
            <Stack.Screen
              options={{...horizontalTransition, headerShown: false}}
              name="BeritaNavigator"
              component={BeritaNavigator}
              lazy={true}
            />
            <Stack.Screen
              options={{...horizontalTransition, headerShown: false}}
              name="InformasiNavigator"
              component={InformasiNavigator}
              lazy={true}
            />
            <Stack.Screen
              options={{...horizontalTransition, headerShown: false}}
              name="BlogNavigator"
              component={BlogNavigator}
              lazy={true}
            />
            <Stack.Screen
              options={{...horizontalTransition, headerShown: false}}
              name="GaleriNavigator"
              component={GaleriNavigator}
              lazy={true}
            />
            <Stack.Screen
              options={{...horizontalTransition, headerShown: false}}
              name="BarcodeNavigator"
              component={BarcodeNavigator}
              lazy={true}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
