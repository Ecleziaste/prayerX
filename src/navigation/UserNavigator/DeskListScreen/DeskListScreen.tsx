import React, {useEffect} from 'react';
import {Image, Alert} from 'react-native';
import styled from 'styled-components/native';
import {Form, Field} from 'react-final-form';
import InputFieldCentered from '../../../components/InputFieldCentered';
import Desk from './Desk';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {selectColumns} from '../../../store/columns/selectors';
import {useNavigation} from '@react-navigation/core';
import {setUser} from '../../../store/user/actions';
import CROSS_ICON from '../../../icons/Cross.png';
import {getColumns, addColumn} from '../../../store/columns/actions';
import {getCards} from '../../../store/cards/actions';

const DeskListScreen: React.FC<Props> = () => {
  const columnsIds = useSelector(selectColumns, shallowEqual);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = async ({title}: {title: string}) => {
    try {
      await dispatch(addColumn({title, description: ''}));
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  // const userId = 206;
  useEffect(() => {
    dispatch(getColumns());
    dispatch(getCards());
  }, []);

  return (
    <Container>
      <DesklistHeader>
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <DeskTitle>
              <CloseDeskListBtn onPress={() => dispatch(setUser(null))}>
                <Image source={CROSS_ICON} />
              </CloseDeskListBtn>
              <InputWrapper>
                <Field
                  name="title"
                  value=""
                  component={InputFieldCentered}
                  placeholder="Enter desk name..."
                  defaultValue="My Desk"
                />
              </InputWrapper>
              <AddNewDeskBtn onPress={handleSubmit}>
                <Image source={require('../../../icons/Plus.png')} />
              </AddNewDeskBtn>
            </DeskTitle>
          )}
        />
      </DesklistHeader>
      <DesklistBody>
        {columnsIds.map(id => {
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
const DeskTitle = styled.View`
  width: 100%;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  /* text-align: center; */
`;
const DesklistBody = styled.View`
  width: 100%;
  padding: 0 15px 0 15px;
  align-items: center;
`;
const InputWrapper = styled.View``;
