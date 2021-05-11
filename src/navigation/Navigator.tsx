import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import GuestNavigator from './GuestNavigator';
import UserNavigator from './UserNavigator';
import {useSelector} from 'react-redux';
import {selectUser} from '../store/user/selectors';

const Navigator = () => {
  const user = useSelector(selectUser);

  return (
    <NavigationContainer>
      {user ? <UserNavigator /> : <GuestNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
