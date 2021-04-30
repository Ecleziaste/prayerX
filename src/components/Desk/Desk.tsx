import React from 'react';
import styled from 'styled-components/native';
import {v4 as uuidv4} from 'uuid';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {selectDeskById} from '../../store/desks/selectors';
import {useNavigation} from '@react-navigation/core';
import AppRoutes from '../../navigation/route';

const Desk: React.FC<Props> = ({id}) => {
  const {title} = useSelector((state: RootState) => selectDeskById(state, id))!;
  console.log(title);
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('Desk')}>
      <DeskTitle>{title}</DeskTitle>
    </Container>
  );
};

export default Desk;

type Props = {
  id: string;
};

const Container = styled.TouchableOpacity`
  width: 100%;
  margin: 0 15px 10px 15px;
  border-width: 1px;
  border-radius: 4px;
  border-color: #e5e5e5;
`;
const DeskTitle = styled.Text`
  margin: 20px 0 20px 15px;
`;
