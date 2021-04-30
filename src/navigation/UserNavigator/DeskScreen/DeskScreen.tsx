import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const DeskScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>List of tasks</Text>
    </View>
  );
};

export default DeskScreen;

type Props = {
  navigation: any;
};
