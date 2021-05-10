import React from 'react';
import styled from 'styled-components/native';

const InputField: React.FC<Props> = ({placeholder, input}) => {
  return <Input placeholder={placeholder} {...input} />;
};

const InputContainer = styled.View`
  color: rgba(81, 77, 71, 1);
  width: 100%;
  margin: 16px 15px 0 15px;
  padding: 14px;
  align-self: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
`;

const Input = styled.TextInput`
  font-family: SF UI Text;
  font-size: 17px;
  line-height: 20px;
  /* color: #9c9c9c; */
  /* color: rgba(81, 77, 71, 1);
  width: 100%;
  margin: 16px 15px 0 15px;
  padding: 14px;
  align-self: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 10px; */
`;

export default InputField;

type Props = {
  placeholder: string;
  props: any;
  input: any;
};
