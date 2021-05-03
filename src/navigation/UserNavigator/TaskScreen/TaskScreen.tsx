import React from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styled from 'styled-components/native';

const TaskScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>TASK SCREEN</Text>
    </Container>
  );
};

export default TaskScreen;

type Props = {};

const Container = styled.View`
  margin: 0;
  padding: 0;
  background: #ffffff;
  flex: 1;
  align-self: stretch;
  align-items: center;
`;
