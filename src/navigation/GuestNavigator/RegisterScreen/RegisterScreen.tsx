import React from 'react';
import {Form, Field} from 'react-final-form';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export const RegisterScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>U SHALL NOT PASS!</Text>
      <Text>Please register</Text>
      <Text>Registration Form</Text>
    </View>
  );
};

export default RegisterScreen;

type Props = {};
