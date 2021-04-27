import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserLogin from '../../components/UserLogin';
import DeskList from '../../components/DeskList';

const UserNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={UserLogin}
        // options={{title: 'Please log in'}}
      />
      <Stack.Screen name="Profile" component={DeskList} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
