import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DeskList from './ScreenDesk';

const UserNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Desklist">
      <Stack.Screen name="DeskList" component={DeskList} />
      {/* далее 2 скрина: доска и таска */}
    </Stack.Navigator>
  );
};

export default UserNavigator;
