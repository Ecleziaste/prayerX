import React, {useState, useEffect} from 'react';
import CIRCLED_ARROW_ICON from '../../../assets/icons/CircledArrowLeft.png';
import SETTINGS_ICON from '../../../assets/icons/Settings.png';
import {RootState} from '../../../store';
import {Alert} from 'react-native';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {
  selectCardsIds,
  selectSubscribedCardsIds,
  selectCheckedCardsIds,
  selectUncheckedCardsIds,
  selectCardsIdsByColumnId,
} from '../../../store/cards/selectors';
import {selectColumnById} from '../../../store/columns/selectors';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styled from 'styled-components/native';
import InputAdd from './InputAdd';
import Task from './Task';
import ButtonLong from '../../../components/ButtonLong';
import {DeskScreenProps} from '../UserNavigator';
import {getCards, addCard} from '../../../store/cards/actions';
const DeskScreen: React.FC<Props> = ({
  route: {
    params: {id},
  },
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {title} = useSelector((state: RootState) =>
    selectColumnById(state, id),
  )!;

  const cardsIds = useSelector((state: RootState) =>
    selectCardsIdsByColumnId(state, id),
  )!;
  const cards = useSelector(selectCardsIds);
  const cardsSubscribed = useSelector(selectSubscribedCardsIds);
  const cardsAnswered = useSelector(selectCheckedCardsIds);
  const cardsUnanswered = useSelector(selectUncheckedCardsIds);

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

  const onSubmit = async ({title}: {title: string}) => {
    try {
      await dispatch(
        addCard({
          title,
          description: '',
          checked: false,
          columnId: id,
          commentsIds: [],
        }),
      );
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  // useEffect(() => {
  //   dispatch(getCards());
  // }, []);

  return (
    <Container>
      <DeskScreenHeader>
        <BackBtn onPress={() => navigation.goBack()}>
          <Image source={require(CIRCLED_ARROW_ICON)} />
        </BackBtn>
        <SettingsIcon>
          <Image source={require(SETTINGS_ICON)} />
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
      <InputAdd onSubmit={onSubmit} />

      {tab ? (
        <DeskScreenBody
          data={cardsIds}
          renderItem={({item}: any) => <Task id={item} />}
          keyExtractor={item => item + '1'}
        />
      ) : (
        <DeskScreenBody
          data={cards}
          renderItem={({item}: any) => <Task id={item} />}
          keyExtractor={item => item + '2'}
        />
      )}
      <ButtonLong text={btnText} handlerFunc={() => handleBtnPush()} />
      {btnPushed && (
          <UnansweredPrayers
            data={cardsUnanswered}
            renderItem={({item}: any) => <Task id={item} />}
            keyExtractor={item => item + '3'}
          />
        ) && (
          <AnsweredPrayers
            data={cardsAnswered}
            renderItem={({item}: any) => <Task id={item} />}
            keyExtractor={item => item + '4'}
          />
        )}
      {/* TODO: табы из навигейшн */}
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
const UnansweredPrayers = AnsweredPrayers;
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
