import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserLogin from './ScreenLogin';
import Register from './ScreenRegister';

const GuestNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={UserLogin}
        // userHasLogged={userHasLogged}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default GuestNavigator;

type Props = {
  userHasLogged: () => void;
};
