import React from 'react';
import styled from 'styled-components/native';

const InputField: React.FC<Props> = ({placeholder, input}) => {
  //   <Field
  //   name="PrayerName"
  //   component={InputField}
  //   placeholder="Add a prayer..."
  // />
  return <Input placeholder={placeholder} {...input} />;
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
};
