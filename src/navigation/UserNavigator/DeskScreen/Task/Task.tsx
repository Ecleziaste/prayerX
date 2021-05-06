import React, {useState} from 'react';
import {RootState} from '../../../../store';
import {selectTaskById} from '../../../../store/tasks/selectors';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import AppRoutes from '../../../route';
import styled from 'styled-components/native';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';

const Task: React.FC<Props> = ({id}) => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const {title} = useSelector((state: RootState) => selectTaskById(state, id))!;
  const {users} = useSelector((state: RootState) => selectTaskById(state, id))!;
  const {prayers} = useSelector((state: RootState) =>
    selectTaskById(state, id),
  )!;

  return (
    <TaskContainer>
      <StateBox>
        <StateIcon source={require('../../../../icons/State/Red.png')} />
      </StateBox>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}></CheckBox>
      <TouchableText
        onPress={() => navigation.navigate(AppRoutes.TaskScreen, {title})}>
        <TaskText numberOfLines={1} ellipsizeMode="tail">
          {title}
        </TaskText>
      </TouchableText>
      <UserIcon source={require('../../../../icons/User/user.png')}></UserIcon>
      <UserCount>
        <Text>{users}</Text>
      </UserCount>
      <PrayerIcon
        source={require('../../../../icons/HandsBlue/prayer_line.png')}></PrayerIcon>
      <PrayerCount>
        <Text>{prayers}</Text>
      </PrayerCount>
    </TaskContainer>
  );
};

export default Task;

type Props = {
  id: string;
};

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
