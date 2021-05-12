import React, {useState} from 'react';
import {RootState} from '../../../store';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {
  selectSubscribedTasksIds,
  selectAnsweredTasksIds,
  selectUnansweredTasksIds,
} from '../../../store/tasks/selectors';
import {selectDeskById} from '../../../store/desks/selectors';
import {selectTasksIdsByDeskId} from '../../../store/tasks/selectors';
import {Image} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/core';
import styled from 'styled-components/native';
import InputAdd from './InputAdd';
import Task from './Task';
import ButtonLong from '../../../components/ButtonLong';
import {DeskScreenProps} from '../UserNavigator';

const DeskScreen: React.FC<Props> = ({
  route: {
    params: {id},
  },
}) => {
  const navigation = useNavigation();

  const {title} = useSelector((state: RootState) => selectDeskById(state, id))!;
  const tasksIds = useSelector((state: RootState) =>
    selectTasksIdsByDeskId(state, id),
  )!;
  // const tasks = useSelector(selectTasksIds);
  const tasksSubscribed = useSelector(selectSubscribedTasksIds);
  const tasksAnswered = useSelector(selectAnsweredTasksIds);
  const tasksUnanswered = useSelector(selectUnansweredTasksIds);

  const [tab, setTab] = useState(true);
  const [myPrayers, setMyPrayres] = useState(true);
  const [subscribed, setSubscribed] = useState(false);
  const handleLeftTabClick = () => {
    setTab(true);
    setMyPrayres(true);
    setSubscribed(false);
  };
  const handleRightTabClick = () => {
    setTab(false);
    setMyPrayres(false);
    setSubscribed(true);
  };

  const [btnPushed, setBtnPushed] = useState(false);
  const [btnText, setBtnText] = useState('show answered prayers');
  const handleBtnPush = () => {
    switch (btnPushed) {
      case false:
        setBtnPushed(true);
        setBtnText('hide answered prayers');
        break;
      case true:
        setBtnPushed(false);
        setBtnText('show answered prayers');
    }
  };

  const onSubmit = (values: any) => {
    console.log('values', values);
  };

  return (
    <Container>
      <DeskScreenHeader>
        <BackBtn onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../icons/CircledArrowLeft.png')}></Image>
        </BackBtn>
        <SettingsIcon>
          <Image source={require('../../../icons/Settings.png')}></Image>
        </SettingsIcon>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <TabsContainer>
          <MyPrayers active={myPrayers} onPress={handleLeftTabClick}>
            <MyPrayersText active={myPrayers}>my prayers</MyPrayersText>
          </MyPrayers>
          <Subscribed active={subscribed} onPress={handleRightTabClick}>
            <SubscribedInnerContent>
              <SubscribedText active={subscribed}>subscribed</SubscribedText>
              <SubscribedIcon>
                <SubscribedIconText>3</SubscribedIconText>
              </SubscribedIcon>
            </SubscribedInnerContent>
          </Subscribed>
        </TabsContainer>
      </DeskScreenHeader>
      <InputAdd onSubmit={onSubmit}></InputAdd>
      {/* {desksIds.map(id => {
        return <Desk id={id} key={id} />;
      })} */}
      {tab ? (
        <DeskScreenBody
          keyExtractor={item => item + '1'}
          data={tasksIds}
          renderItem={({item}: any) => <Task id={item} />}></DeskScreenBody>
      ) : (
        <DeskScreenBody
          keyExtractor={item => item + '2'}
          data={tasksSubscribed}
          renderItem={({item}: any) => <Task id={item} />}></DeskScreenBody>
      )}
      <ButtonLong
        text={btnText}
        handlerFunc={() => handleBtnPush()}></ButtonLong>
      {btnPushed && (
        <AnsweredPrayers
          keyExtractor={item => item + '3'}
          data={tasksAnswered}
          renderItem={({item}: any) => <Task id={item} />}>
          {/* <Task id={'1'} /> */}
        </AnsweredPrayers>
      )}
    </Container>
  );
};

export default DeskScreen;

interface Props extends DeskScreenProps {}

const Container = styled.SafeAreaView`
  background: #ffffff;
  flex: 1;
  align-self: stretch;
  align-items: center;
`;
const DeskScreenHeader = styled.View`
  width: 100%;
  height: 103px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;
const DeskScreenBody = styled.FlatList``;
const AnsweredPrayers = styled.FlatList`
  text-decoration: line-through;
`;
const TitleWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-family: SF UI Text;
  text-align: center;
  font-size: 17px;
  line-height: 20px;
  font-weight: 600;
  color: #514d47;
`;
const TabsContainer = styled.View`
  flex: 1;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  /* padding-bottom: 17px; */
`;
const MyPrayers = styled.TouchableOpacity<{active: boolean}>`
  width: 50%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.active ? 'rgba(114, 168, 188, 1)' : 'rgba(200, 200, 200, 1)'};
`;
const MyPrayersText = styled.Text<{active: boolean}>`
  text-transform: uppercase;
  color: ${props =>
    props.active ? 'rgba(114, 168, 188, 1)' : 'rgba(200, 200, 200, 1)'};
`;
const Subscribed = styled.TouchableOpacity<{active: boolean}>`
  width: 50%;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.active ? 'rgba(114, 168, 188, 1)' : 'rgba(200, 200, 200, 1)'};
`;
const SubscribedInnerContent = styled.View`
  flex: 1;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const SubscribedText = styled.Text<{active: boolean}>`
  text-transform: uppercase;
  color: ${props =>
    props.active ? 'rgba(114, 168, 188, 1)' : 'rgba(200, 200, 200, 1)'};
`;
const SubscribedIcon = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-left: 9px;
  background-color: rgba(172, 82, 83, 1);
`;
const SubscribedIconText = styled.Text`
  font-size: 9px;
  color: white;
`;
const SettingsIcon = styled.TouchableOpacity`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 20px;
  top: 20px;
`;

const BackBtn = styled.TouchableOpacity`
  position: absolute;
  margin: 0 auto;
  top: 20px;
  left: 12px;
  width: 24px;
  height: 24px;
`;
