import React, {useEffect} from 'react';
import {View, Image, Alert} from 'react-native';
import styled from 'styled-components/native';
import {Form, Field} from 'react-final-form';
import InputField from '../../../components/InputField';
import Desk from './Desk';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {selectDesks} from '../../../store/desks/selectors';
import {useNavigation} from '@react-navigation/core';
import {setUser} from '../../../store/user/actions';
import CROSS_ICON from '../../../icons/Cross.png';
import {getColumns, newColumn} from '../../../store/desks/actions';

const DeskListScreen: React.FC<Props> = () => {
  const desksIds = useSelector(selectDesks, shallowEqual);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = async (values: ValuesType) => {
    console.log('values', values);

    const data = {
      title: 'NewTitle',
      description: null,
    };
    try {
      await dispatch(newColumn(data));
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  const userId = 206;

  useEffect(() => {
    dispatch(getColumns(userId));
  }, []);

  return (
    <Container>
      <DesklistHeader>
        <CloseDeskListBtn onPress={() => dispatch(setUser(null))}>
          <Image source={CROSS_ICON} />
        </CloseDeskListBtn>
        <DeskTitle>
          <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
              <InputWrapper>
                <Field
                  name="PrayerName"
                  component={InputField}
                  placeholder="Enter desk name..."
                  defaultValue="My Desk"
                />
                <AddNewDeskBtn onPress={() => handleSubmit()}>
                  <Image source={require('../../../icons/Plus.png')} />
                </AddNewDeskBtn>
              </InputWrapper>
            )}></Form>
        </DeskTitle>
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
type ValuesType = {title: string; description: string | null};

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
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  font-size: 17px;
`;
const DesklistBody = styled.View`
  width: 100%;
  padding: 0 15px 0 15px;
  align-items: center;
`;
const InputWrapper = styled.View`
  flex-flow: row nowrap;
`;
