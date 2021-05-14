import 'react-native-gesture-handler';
import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import DeskListScreen from './DeskListScreen';
import DeskScreen from './DeskScreen';
import TaskScreen from './TaskScreen';
import AppRoutes from '../route';
import {RouteProp} from '@react-navigation/core';

const UserNavigator = () => {
  const Stack = createStackNavigator<UserNavigatorParams>();

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
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AppRoutes.TaskScreen}
        component={TaskScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

type UserNavigatorParams = {
  [AppRoutes.DeskListScreen]: undefined;
  [AppRoutes.DeskScreen]: {id: number};
  [AppRoutes.TaskScreen]: undefined;
};

export interface DeskListScreenProps {
  navigation: StackNavigationProp<
    UserNavigatorParams,
    AppRoutes.DeskListScreen
  >;
  route: RouteProp<UserNavigatorParams, AppRoutes.DeskListScreen>;
}

export interface DeskScreenProps {
  navigation: StackNavigationProp<UserNavigatorParams, AppRoutes.DeskScreen>;
  route: RouteProp<UserNavigatorParams, AppRoutes.DeskScreen>;
}

export interface TaskScreenProps {
  navigation: StackNavigationProp<UserNavigatorParams, AppRoutes.TaskScreen>;
  route: RouteProp<UserNavigatorParams, AppRoutes.TaskScreen>;
}

export default UserNavigator;
