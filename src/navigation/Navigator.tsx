import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {useState} from 'react';
import GuestNavigator from './GuestNavigator';
import UserNavigator from './UserNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from '../store/user/selectors';

const Navigator = () => {
  const user = useSelector(selectUser);
  // const [user, setUser] = useState(false);

  return (
    <NavigationContainer>
      {user ? <UserNavigator /> : <GuestNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
