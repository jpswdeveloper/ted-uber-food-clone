import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import Home from './Design/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Bar from './Design/Navigation/Bar';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist'
LogBox.ignoreAllLogs();
export default function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Bar />
        </NavigationContainer>
      </PersistGate>
    </Provider >
  );
}


