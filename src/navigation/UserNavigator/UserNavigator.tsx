import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DeskListScreen from './DeskListScreen';
import DeskScreen from './DeskScreen';
import AppRoutes from '../route';

const UserNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={AppRoutes.DeskListScreen}>
      <Stack.Screen
        name={AppRoutes.DeskListScreen}
        component={DeskListScreen}
        options={{headerShown: false}}
        // options={{title: AppRoutes.ScreenDeskList}}
      />
      <Stack.Screen
        name={AppRoutes.DeskScreen}
        component={DeskScreen}
        options={{title: AppRoutes.DeskScreen}}
      />
      {/* далее 2 скрина: доска и таска */}
    </Stack.Navigator>
  );
};

export default UserNavigator;
