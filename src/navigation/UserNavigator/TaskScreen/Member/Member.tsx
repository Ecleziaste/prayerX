import React from 'react';
import styled from 'styled-components/native';

const Member: React.FC<Props> = () => {
  return <Container>{/* <ProfilePic /> */}</Container>;
};

const Container = styled.View`
  width: 32px;
  height: 32px;
  margin-right: 6px;
  border-radius: 50px;
  border-width: 1px;
  border-color: tomato;
`;
const ProfilePic = styled.Image`
  width: 32px;
  height: 32px;
  /* border-radius: 50px; */
`;

export default Member;

type Props = {};
