import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';

// navigationContainer
import Navigator from './src/navigators/Navigator';

import {store, persistor} from './src/store/store';
import {Provider} from 'react-redux';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
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
