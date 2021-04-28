import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import Navigator from './src/navigation/Navigator';

const App = () => {
  // const userHasLogged = (value: any) => {
  //   setUser(value);
  // };

  return <Navigator />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
