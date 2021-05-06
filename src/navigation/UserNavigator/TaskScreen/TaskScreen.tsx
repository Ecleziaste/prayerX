import React from 'react';
import {RootState} from '../../../store';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/core';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {selectTaskById} from '../../../store/tasks/selectors';
import styled from 'styled-components/native';

const TaskScreen: React.FC<Props> = () => {
  const route = useRoute();
  const {title} = route.params;

  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};

export default TaskScreen;

type Props = {};

const Container = styled.View`
  margin: 0;
  padding: 0;
  background: #ffffff;
  flex: 1;
  align-self: stretch;
  align-items: center;
`;
