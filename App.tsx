import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import UserLogin from './src/components/UserLogin';
import DeskList from './src/components/DeskList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={UserLogin}
          // options={{title: 'Please log in'}}
        />
        <Stack.Screen name="Profile" component={DeskList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#ddd',
  },
});

export default App;
