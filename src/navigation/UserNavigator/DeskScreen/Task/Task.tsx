import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import AppRoutes from '../../../route';

const Task: React.FC<Props> = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(AppRoutes.TaskScreen)}>
        <Text>TASK </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;

type Props = {};
