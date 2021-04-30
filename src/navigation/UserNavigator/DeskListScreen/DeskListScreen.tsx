import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import Desk from '../../../components/Desk';
import {useSelector, shallowEqual} from 'react-redux';
import {selectDesks} from '../../../store/desks/selectors';

const DeskListScreen: React.FC<Props> = ({navigation}) => {
  const desksIds = useSelector(selectDesks, shallowEqual);
  console.log(desksIds);

  return (
    <Container>
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      <DesklistHeader>
        <LeftBlock></LeftBlock>
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

type Props = {
  navigation: any;
};

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
const LeftBlock = styled.View`
  width: 33.33%;
`;
const NewDeskTitle = styled.TextInput`
  width: 33.33%;
  /* text-align: center; */
  align-items: center;
  justify-content: center;
`;
const AddNewDeskBtn = styled.TouchableOpacity`
  width: 33.33%;
  flex-flow: row nowrap;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  margin: 24px 15px 24px 15px;
  width: 16px;
  height: 16px;
  border-color: red;
  border-width: 1px;
`;
const DesklistBody = styled.View`
  width: 100%;
  padding: 0 15px 0 15px;
  /* height: 100%; */
  align-items: center;
`;
