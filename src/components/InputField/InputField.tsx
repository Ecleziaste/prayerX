import React from 'react';
import styled from 'styled-components/native';

const InputField: React.FC<Props> = ({placeholder, input}) => {
  return <Input placeholder={placeholder} {...input} />;
};

const InputFieldCentered: React.FC<Props> = ({placeholder, input}) => {
  return <InputCentered placeholder={placeholder} {...input} />;
};

const Input = styled.TextInput`
  font-family: SF UI Text;
  font-size: 17px;
  line-height: 20px;
`;
const InputCentered = styled(Input)`
  text-align: center;
`;

export default InputField;

type Props = {
  placeholder: string;
  props: any;
  input: any;
};
