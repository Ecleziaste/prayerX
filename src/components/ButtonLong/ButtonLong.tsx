import React from 'react';
import {useNavigation} from '@react-navigation/core';
import styled from 'styled-components/native';

const Task: React.FC<Props> = ({text, handlerFunc}) => {
  const navigation = useNavigation();

  return (
    <Btn onPress={() => handlerFunc()}>
      <BtnText>{text}</BtnText>
    </Btn>
  );
};

export default Task;

const Btn = styled.TouchableOpacity`
  width: 209px;
  height: 30px;
  margin: 21px;
  padding: 7px 17px;
  background: #bfb393;
  box-shadow: 0px 2px 15px rgba(66, 78, 117, 0.1);
  border-radius: 15px;
  align-self: center;
  justify-content: center;
`;
const BtnText = styled.Text`
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff; ;
`;

type Props = {
  text: string;
  handlerFunc: () => void;
};
