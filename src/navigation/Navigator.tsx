import {NavigationContainer} from '@react-navigation/native';
import {useState} from 'react';
import GuestNavigator from './GuestNavigator';
import UserNavigator from './UserNavigator';
import React from 'react';

const Navigator = () => {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      {user ? <UserNavigator /> : <GuestNavigator />}
    </NavigationContainer>
  );
};
export default Navigator;
