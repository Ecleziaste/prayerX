import React, {useEffect} from 'react';
import CROSS_ICON from '../../../assets/icons/Cross.png';
import PLUS_ICON from '../../../assets/icons/Plus.png';
import {Image, Alert} from 'react-native';
import styled from 'styled-components/native';
import {Form, Field} from 'react-final-form';
import InputFieldCentered from '../../../components/InputFieldCentered';
import Desk from './Desk';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {selectColumns} from '../../../store/columns/selectors';
import {setUser} from '../../../store/user/actions';
import {getColumns, addColumn} from '../../../store/columns/actions';
import {getCards} from '../../../store/cards/actions';
import {getComments} from '../../../store/comments/actions';

const DeskListScreen: React.FC<Props> = () => {
  const columnsIds = useSelector(selectColumns, shallowEqual);
  const dispatch = useDispatch();

  const onSubmit = async ({title}: {title: string}) => {
    try {
      await dispatch(addColumn({title, description: ''}));
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  useEffect(() => {
    dispatch(getColumns());
    dispatch(getCards());
    dispatch(getComments());
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
                <Image source={PLUS_ICON} />
              </AddNewDeskBtn>
            </DeskTitle>
          )}
        />
      </DesklistHeader>
      <DesklistBodyContainer>
        <DesklistBody
          data={columnsIds}
          renderItem={({item}: any) => <Desk id={item} />}
          keyExtractor={item => String(item)}
        />
      </DesklistBodyContainer>
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
`;
const DesklistBodyContainer = styled.SafeAreaView``;
const DesklistBody = styled.FlatList``;
const InputWrapper = styled.View``;
