import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import AppRoutes from '../../../route';
import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';

const Task: React.FC<Props> = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <TaskContainer>
      <StateBox>
        <StateIcon source={require('../../../../icons/State/Red.png')} />
      </StateBox>

      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}></CheckBox>
      <TouchableText onPress={() => navigation.navigate(AppRoutes.TaskScreen)}>
        <TaskText numberOfLines={1} ellipsizeMode="tail">
          TASK sssssssssssssssssssssssss
        </TaskText>
      </TouchableText>
      <UserIcon source={require('../../../../icons/User/user.png')}></UserIcon>
      <UserCount>
        <Text>4</Text>
      </UserCount>
      <PrayerIcon
        source={require('../../../../icons/HandsBlue/prayer_line.png')}></PrayerIcon>
      <PrayerCount>
        <Text>29</Text>
      </PrayerCount>
    </TaskContainer>
  );
};

export default Task;

type Props = {};

const TaskContainer = styled.View`
  width: 345px;
  margin: 0 15px 0 15px;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 66px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;
const TouchableText = styled.TouchableOpacity`
  flex: 1;
`;
const TaskText = styled.Text`
  font-size: 17px;
  line-height: 20px;
`;
const StateBox = styled.View`
  width: 24px;
  height: 24px;
`;
const StateIcon = styled.Image``;
const UserIcon = styled.Image`
  margin-left: 5px;
`;
const UserCount = styled.View`
  margin-left: 4px;
  width: 21px;
`;
const PrayerIcon = styled.Image``;
const PrayerCount = styled.View`
  margin-left: 5px;
  width: 21px;
`;

styled(CheckBox)`
  margin: 20px;
`;
