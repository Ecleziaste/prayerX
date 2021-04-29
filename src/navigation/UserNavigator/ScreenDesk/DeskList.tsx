import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const DeskList: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      <View>
        <Text>My Desk</Text>
        <Text>+</Text>
      </View>
      <View>
        <Text>List of desks</Text>
      </View>
    </View>
  );
};

export default DeskList;

type Props = {
  navigation: any;
};
