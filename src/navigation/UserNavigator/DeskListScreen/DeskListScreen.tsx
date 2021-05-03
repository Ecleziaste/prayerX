import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import Desk from './Desk';
import {useSelector, shallowEqual} from 'react-redux';
import {selectDesks} from '../../../store/desks/selectors';
import {useNavigation} from '@react-navigation/core';

const DeskListScreen: React.FC<Props> = () => {
  const desksIds = useSelector(selectDesks, shallowEqual);
  const navigation = useNavigation();
  console.log(desksIds);

  return (
    <Container>
      <DesklistHeader>
        <CloseDeskListBtn>
          <Text>x</Text>
        </CloseDeskListBtn>
        <NewDeskTitle defaultValue="My Desk"></NewDeskTitle>
        <AddNewDeskBtn>
          <View>
            <Text>+</Text>
          </View>
        </AddNewDeskBtn>
      </DesklistHeader>
      <DesklistBody>
        {desksIds.map(id => {
          return <Desk id={id} key={id} />;
        })}
      </DesklistBody>
    </Container>
  );
};

export default DeskListScreen;

type Props = {};

const Container = styled.View`
  margin: 0;
  padding: 0;
  background: #ffffff;
  flex: 1;
  align-self: stretch;
`;
const DesklistHeader = styled.View`
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  border-top-width: 1px;
  border-top-color: #e5e5e5;

  margin-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;
const CloseDeskListBtn = styled.View`
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 24px 15px 24px 15px;
  width: 16px;
  height: 16px;
  border-color: red;
  border-width: 1px;
`;
const AddNewDeskBtn = CloseDeskListBtn;
const NewDeskTitle = styled.TextInput`
  align-items: center;
  justify-content: center;
  font-size: 17px;
`;
const DesklistBody = styled.View`
  width: 100%;
  padding: 0 15px 0 15px;
  align-items: center;
`;
