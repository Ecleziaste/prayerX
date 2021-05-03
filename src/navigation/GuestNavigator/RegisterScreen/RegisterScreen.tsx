import React from 'react';
import {Form, Field} from 'react-final-form';
import {TouchableOpacity, Text, View} from 'react-native';
import styled from 'styled-components/native';

export const RegisterScreen: React.FC<Props> = () => {
  return (
    <Container>
      <Text>U SHALL NOT PASS!</Text>
      <Text>Please register</Text>
      <Text>Registration Form</Text>
    </Container>
  );
};

export default RegisterScreen;

type Props = {};

const Container = styled.View`
  margin: 0;
  padding: 0;
  background: #ffffff;
  flex: 1;
  align-self: stretch;
  align-items: center;
`;
