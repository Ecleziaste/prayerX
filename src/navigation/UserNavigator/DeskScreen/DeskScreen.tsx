import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Task from './Task';

const DeskScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  return (
    // FlatList?
    <View>
      <Text>List of tasks</Text>
      <Task></Task>
      <Task></Task>
      <Task></Task>
    </View>
  );
};

export default DeskScreen;

type Props = {};
