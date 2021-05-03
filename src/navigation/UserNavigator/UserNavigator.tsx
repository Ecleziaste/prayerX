import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DeskListScreen from './DeskListScreen';
import DeskScreen from './DeskScreen';
import TaskScreen from './TaskScreen';
import AppRoutes from '../route';

const UserNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={AppRoutes.DeskListScreen}>
      <Stack.Screen
        name={AppRoutes.DeskListScreen}
        component={DeskListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AppRoutes.DeskScreen}
        component={DeskScreen}
        options={{title: AppRoutes.DeskScreen}}
      />
      <Stack.Screen
        name={AppRoutes.TaskScreen}
        component={TaskScreen}
        options={{title: AppRoutes.TaskScreen}}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;
