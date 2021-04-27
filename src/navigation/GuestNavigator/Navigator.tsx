import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Guest from '../../components/Guest';

const GuestNavigator = () => {
  const Stack = createStackNavigator();

  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Guest">
      <Stack.Screen name="Guest" component={Guest} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default GuestNavigator;
