import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const TaskScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>TASK SCREEN</Text>
    </View>
  );
};

export default TaskScreen;

type Props = {};
