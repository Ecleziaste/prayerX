import React from 'react';
import styled from 'styled-components/native';
import InputField from '../../../../components/InputField';
import {Form, Field} from 'react-final-form';
import {Image} from 'react-native';

const InputAdd: React.FC<Props> = ({onSubmit}) => {
  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <AddPrayer>
            <AddImage onPress={() => handleSubmit()}>
              <Image source={require('../../../../icons/AddBig.png')}></Image>
            </AddImage>
            <Field
              name="title"
              component={InputField}
              placeholder="Add a prayer..."
            />
          </AddPrayer>
        )}></Form>
    </Container>
  );
};

const Container = styled.View`
  margin: 15px;
  align-self: stretch;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
`;

const AddPrayer = styled.TouchableOpacity`
  justify-content: flex-start;
  align-items: center;
  flex-flow: row nowrap;
`;
const AddImage = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  margin: 0 6px 0 14px;
`;

export default InputAdd;

type Props = {
  onSubmit: (values: any) => void;
};
