import React from 'react';
import styled from 'styled-components/native';

const InputField: React.FC<Props> = () => {
  return <InputContainer />;
};

const InputContainer = styled.View`
  color: rgba(81, 77, 71, 1);
  width: 100%;
  margin: 16px 15px 0 15px;
  padding: 4px;
  align-self: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
`;

export default InputContainer;

type Props = {};
