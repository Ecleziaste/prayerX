import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import AppRoutes from '../../../route';
import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';

const Task: React.FC<Props> = () => {
  const navigation = useNavigation();
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <TaskContainer>
      {/* <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}></CheckBox> */}
      <TouchableOpacity
        onPress={() => navigation.navigate(AppRoutes.TaskScreen)}>
        <Text>TASK </Text>
      </TouchableOpacity>
    </TaskContainer>
  );
};

export default Task;

type Props = {};

const TaskContainer = styled.View`
  flex-flow: row nowrap;
  align-items: center;
  height: 66px;
`;
// const CheckBox = styled.CheckBox``;
