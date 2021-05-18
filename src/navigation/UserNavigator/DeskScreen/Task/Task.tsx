import React, {useState} from 'react';
import {RootState} from '../../../../store';
import {selectCardById} from '../../../../store/cards/selectors';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import AppRoutes from '../../../route';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import STATE_RED_ICON from '../../../../assets/icons/State/Red.png';
import USER_ICON from '../../../../assets/icons/User/user.png';
import PRAYER_ICON from '../../../../assets/icons/HandsBlue/prayer_line.png';
import {updateCard, getCards, getCard} from '../../../../store/cards/actions';

const Task: React.FC<Props> = ({id}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {checked} = useSelector((state: RootState) =>
    selectCardById(state, id),
  )!;
  const [toggleCheckBox, setToggleCheckBox] = useState(checked);
  const {title} = useSelector((state: RootState) => selectCardById(state, id))!;
  const {description} = useSelector((state: RootState) =>
    selectCardById(state, id),
  )!;

  return (
    <TaskContainer
      onPress={() => navigation.navigate(AppRoutes.TaskScreen, {id})}>
      <StateBox>
        <StateIcon source={STATE_RED_ICON} />
      </StateBox>
      <CheckBox
        // tintColors={{true: #ffffff, false: #ffffff}}
        disabled={false}
        value={toggleCheckBox}
        onValueChange={() => {
          setToggleCheckBox(!toggleCheckBox);
          dispatch(
            updateCard({
              prayerId: id,
              title,
              description,
              checked: !toggleCheckBox,
            }),
          );
          dispatch(getCard({prayerId: id}));
        }}
      />
      <InnerText>
        <TaskTitle
          numberOfLines={1}
          ellipsizeMode="tail"
          isActive={toggleCheckBox}>
          {title}
        </TaskTitle>
      </InnerText>
      <UserIcon source={USER_ICON} />
      <UserCount>
        <Text>5</Text>
      </UserCount>
      <PrayerIcon source={PRAYER_ICON} />
      <PrayerCount>
        <Text>48</Text>
      </PrayerCount>
    </TaskContainer>
  );
};

export default Task;

type Props = {
  id: number;
};

const TaskContainer = styled.TouchableOpacity`
  width: 345px;
  margin: 0 15px 0 15px;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 66px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;
const InnerText = styled.View`
  flex: 1;
`;
const TaskTitle = styled.Text`
  font-size: 17px;
  line-height: 20px;
  text-decoration-line: ${props => (props.isActive ? 'line-through' : 'none')};
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
  tintcolors: {
    true: #ffffff;
    false: #ffffff;
  }
`;
