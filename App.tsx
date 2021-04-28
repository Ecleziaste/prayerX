import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import UserLogin from './src/components/UserLogin';
import GuestNavigator from './src/navigation/GuestNavigator';
import UserNavigator from './src/navigation/UserNavigator';

const App = () => {
  const [user, setUser] = useState(null);
  // const userHasLogged = (value: any) => {
  //   setUser(value);
  // };

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
