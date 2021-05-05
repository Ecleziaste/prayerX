import React from 'react';
import styled from 'styled-components/native';

const LoginScreen: React.FC<Props> = ({placeholder, input}) => {
  return <Input {...input.onChange} placeholder={placeholder} />;
};

const Container = styled.View``;

const Input = styled.TextInput`
  width: 100%;
  margin: 16px 15px 0 15px;
  padding: 14px;
  align-self: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
`;

export default LoginScreen;

type Props = {
  placeholder: string;
  input: any;
};
