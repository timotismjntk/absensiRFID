import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Alert, Linking, LogBox, PermissionsAndroid} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';

// navigationContainer
import Navigator from './src/V3/navigators/Navigator';

import {store, persistor} from './src/V3/redux/store';
import {Provider} from 'react-redux';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (cameraPermission !== PermissionsAndroid.RESULTS.GRANTED) {
        const newCameraPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (newCameraPermission !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Error', 'Akses kamera atau lokasi tidak diizinkan', [
            {
              text: 'Tutup',
              onPress: async () => {
                await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.CAMERA,
                );
                Linking.openSettings();
              },
              style: 'cancel',
            },
          ]);
        }
      }
    };
    getPermission();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
