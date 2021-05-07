import React from 'react';
import {RootState} from '../../../store';
import {Image} from 'react-native';
import {useRoute} from '@react-navigation/core';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {selectTaskById} from '../../../store/tasks/selectors';
import styled from 'styled-components/native';

const TaskScreen: React.FC<Props> = () => {
  const route = useRoute();
  const {title} = route.params;

  return (
    <Container>
      <Header>
        <BackBtn>
          <Image source={require('../../../icons/Back/back.png')}></Image>
        </BackBtn>
        <PrayBtn>
          <Image
            source={require('../../../icons/HandsWhite/prayer_line.png')}></Image>
        </PrayBtn>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      </Header>
      <Statistics>
        <StatHeader>
          <StatePic>
            <Image source={require('../../../icons/State/Red.png')}></Image>
          </StatePic>
          <StatHeaderText>Last prayed ...</StatHeaderText>
        </StatHeader>
        <StatBody>
          <FirstStatContainer></FirstStatContainer>
          <StatContainer></StatContainer>
          <StatContainer></StatContainer>
          <StatContainer></StatContainer>
        </StatBody>
      </Statistics>
    </Container>
  );
};

export default TaskScreen;

type Props = {};

const Container = styled.SafeAreaView`
  margin: 0;
  padding: 0;
  background: #ffffff;
  flex: 1;
  align-self: stretch;
  align-items: center;
`;
const Header = styled.View`
  width: 100%;
  height: 130px;
  background: #bfb393;
`;
const BackBtn = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 12px;
  width: 24px;
  height: 24px;
`;
const PrayBtn = styled.TouchableOpacity`
  position: absolute;
  top: 17px;
  right: 15px;
  width: 29px;
  height: 29px;
`;
const TitleWrapper = styled.View`
  margin: 50px 10px 15px 10px;
  padding: 5px;
`;
const Title = styled.Text`
  font-family: SF UI Text;
  font-size: 17px;
  line-height: 27px;
  color: #ffffff;
`;
const Statistics = styled.View`
  width: 100%;
  height: 266px;
`;
const StatHeader = styled.View`
  flex-flow: row nowrap;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
`;
const StatePic = styled.View`
  margin-left: 3px;
  align-items: center;
  width: 24px;
  height: 24px;
`;
const StatHeaderText = styled.Text`
  font-family: SF UI Text;
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
`;
const StatBody = styled.View`
  width: 100%;
  height: 216px;
  flex-flow: row wrap;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
`;
const FirstStatContainer = styled.View`
  width: 50%;
  height: 108px;
  border-top-width: 1px;
  border-left-width: 1px;
  border-color: #e5e5e5;
`;
const StatContainer = styled.View`
  width: 50%;
  height: 108px;
  border-top-width: 1px;
  border-left-width: 1px;
  border-color: #e5e5e5;
`;
const Counter = styled.View``;
const Info = styled.View``;
const InfoText = styled.Text``;
