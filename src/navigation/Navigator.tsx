import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useState} from 'react';
import GuestNavigator from './GuestNavigator';
import UserNavigator from './UserNavigator';

const Navigator = () => {
  const [user, setUser] = useState(true);

  return (
    <NavigationContainer>
      {user ? <UserNavigator /> : <GuestNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
