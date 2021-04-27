import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, View} from 'react-native';
import GuestNavigator from './src/navigation/GuestNavigator';
import UserNavigator from './src/navigation/UserNavigator';

// const Stack = createStackNavigator();

const user = true;

const App = () => {
  return (
    <NavigationContainer>
      {user ? UserNavigator() : GuestNavigator()}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
