import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styled from 'styled-components/native';
import Task from './Task';

const DeskScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  return (
    // FlatList?
    <Container>
      <Text>List of tasks</Text>
      <Task></Task>
      <Task></Task>
      <Task></Task>
    </Container>
  );
};

export default DeskScreen;

type Props = {};

const Container = styled.View`
  margin: 0;
  padding: 0;
  background: #ffffff;
  flex: 1;
  align-self: stretch;
  align-items: center;
`;
