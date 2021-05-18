import React from 'react';
import styled from 'styled-components/native';

const InputField: React.FC<Props> = ({placeholder, input, value, secure}) => {
  console.log('secure', secure);

  return (
    <Input
      value={(value = input.onChange)}
      placeholder={placeholder}
      {...input}
      secureTextEntry={secure}
    />
  );
};

const Input = styled.TextInput`
  font-family: SF UI Text;
  font-size: 17px;
  line-height: 20px;
`;

export default InputField;

type Props = {
  placeholder: string;
  props: any;
  input: any;
  value: string;
  secure?: boolean;
};
