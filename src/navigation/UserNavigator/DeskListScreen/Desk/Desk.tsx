import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';
import {selectColumnById} from '../../../../store/columns/selectors';
import {useNavigation} from '@react-navigation/core';
import AppRoutes from '../../../route';

const Desk: React.FC<Props> = ({id}) => {
  const navigation = useNavigation();
  const {title} = useSelector((state: RootState) =>
    selectColumnById(state, id),
  )!;

  return (
    <Container onPress={() => navigation.navigate(AppRoutes.DeskScreen, {id})}>
      <DeskTitle>{title}</DeskTitle>
    </Container>
  );
};

export default Desk;

type Props = {
  id: number;
};

const Container = styled.TouchableOpacity`
  margin: 0 15px 10px 15px;
  border-width: 1px;
  border-radius: 4px;
  border-color: #e5e5e5;
`;
const DeskTitle = styled.Text`
  margin: 20px 0 20px 15px;
  font-size: 17px;
`;
