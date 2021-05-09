import React from 'react';
import styled from 'styled-components/native';
import InputField from '../../../../components/InputField';

const InputAdd: React.FC<Props> = () => {
  return (
    <Container>
      <AddPrayer>
        <AddImage source={require('../../../../icons/AddBig.png')}></AddImage>
        <InputField placeholder="Add a prayer..." input={() => {}}></InputField>
      </AddPrayer>
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
const AddImage = styled.Image`
  width: 20px;
  height: 20px;
  margin: 0 6px 0 14px;
`;

export default InputAdd;

type Props = {};
