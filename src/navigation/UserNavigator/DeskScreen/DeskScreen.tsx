import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styled from 'styled-components/native';
import Task from './Task';
import ButtonLong from '../../../components/ButtonLong';

const DeskScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  return (
    // FlatList?
    <Container>
      <DeskScreenHeader>
        <TitleWrapper>
          <Title>Title</Title>
        </TitleWrapper>
        <TabsContainer>
          <MyPrayers>
            <TabText>my prayers</TabText>
          </MyPrayers>
          <Subscribed>
            <SubscribedInnerContent>
              <TabText>subscribed</TabText>
              <SubscribedIcon>
                <SubscribedIconText>3</SubscribedIconText>
              </SubscribedIcon>
            </SubscribedInnerContent>
          </Subscribed>
        </TabsContainer>
      </DeskScreenHeader>
      <Task />
      <Task />
      <Task />
      <ButtonLong
        text="show answered prayers"
        handlerFunc={() => {}}></ButtonLong>
    </Container>
  );
};

export default DeskScreen;

type Props = {};

const Container = styled.View`
  margin: 0;
  padding: 0;
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
const TitleWrapper = styled.View`
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  line-height: 20px;
`;
const Title = styled.Text`
  text-align: center;
  font-size: 17px;
  line-height: 20px;
`;
const TabsContainer = styled.View`
  width: 100%;
  height: 50%;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  padding-bottom: 17px;
`;
const MyPrayers = styled.TouchableOpacity`
  justify-content: flex-end;
  align-self: stretch;
`;
const Subscribed = styled.TouchableOpacity`
  /* flex-flow: row nowrap; */
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;
const SubscribedInnerContent = styled.View`
  margin: 0;
  padding: 0;
  flex-flow: row nowrap;
`;
const SubscribedIcon = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 50;
  justify-content: center;
  align-items: center;
  margin-left: 9px;
  background-color: rgba(172, 82, 83, 1);
`;
const SubscribedIconText = styled.Text`
  font-size: 9px;
  color: white;
`;
const TabText = styled.Text`
  /* text-align: left; */
  text-transform: uppercase;
`;
const SettingsIcon = styled.View``;
