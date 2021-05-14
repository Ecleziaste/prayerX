import React from 'react';
import styled from 'styled-components/native';

const InputFieldCentered: React.FC<Props> = ({placeholder, input}) => {
  return <InputCentered placeholder={placeholder} {...input} />;
};

const InputCentered = styled.TextInput`
  font-family: SF UI Text;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
`;

export default InputFieldCentered;

type Props = {
  placeholder: string;
  props: any;
  input: any;
};
