import React from 'react';
import {Text, View} from 'react-native';

export const Guest: React.FC<Props> = () => {
  return (
    <View>
      <Text>U SHALL NOT PASS!</Text>
      <Text>Please register</Text>
    </View>
  );
};

export default Guest;

type Props = {};
