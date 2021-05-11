import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import AppRoutes from '../route';

const GuestNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={AppRoutes.LoginScreen}>
      <Stack.Screen
        name={AppRoutes.LoginScreen}
        component={LoginScreen}
        options={{headerShown: false}}
        // userHasLogged={userHasLogged}
      />
      <Stack.Screen
        name={AppRoutes.RegisterScreen}
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default GuestNavigator;

type Props = {
  userHasLogged: () => void;
};
