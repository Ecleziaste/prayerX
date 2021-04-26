import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const DeskList: React.FC<Props> = () => {
  return (
    <View>
      <View>
        <Text>My Desk</Text>
        <Text>+</Text>
      </View>
      <View>List of desks</View>
    </View>
  );
};

export default DeskList;

type Props = {};
