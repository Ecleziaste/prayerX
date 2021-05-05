import React from 'react';
import {Text, View, Image} from 'react-native';
import styled from 'styled-components/native';
import Desk from './Desk';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {selectDesks} from '../../../store/desks/selectors';
import {useNavigation} from '@react-navigation/core';
import {setUser} from '../../../store/user/actions';

const DeskListScreen: React.FC<Props> = () => {
  const desksIds = useSelector(selectDesks, shallowEqual);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  console.log(desksIds);

  return (
    <Container>
      <DesklistHeader>
        <CloseDeskListBtn onPress={() => dispatch(setUser(null))}>
          <Image source={require('../../../icons/Plus.png')} />
        </CloseDeskListBtn>
        <NewDeskTitle defaultValue="My Desk"></NewDeskTitle>
        <AddNewDeskBtn>
          <View>
            <Image source={require('../../../icons/Plus.png')} />
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
  margin-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;
const CloseDeskListBtn = styled.TouchableOpacity`
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 24px 15px 24px 15px;
  width: 16px;
  height: 16px;
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
