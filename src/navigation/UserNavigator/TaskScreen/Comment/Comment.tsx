import React from 'react';
import styled from 'styled-components/native';

const Comment: React.FC<Props> = () => {
  return (
    <Container>
      <UserPic>{/* <Image></Image> */}</UserPic>
      <Info>
        <TopRow>
          <UserName></UserName>
          <UserActivity></UserActivity>
        </TopRow>
        <UserComment></UserComment>
      </Info>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 74px;
  flex-flow: row nowrap;
`;
const UserPic = styled.View`
  width: 46px;
  height: 46px;
  border-width: 1px;
  border-color: goldenrod;
  border-radius: 50px;
`;
const Info = styled.View``;
const TopRow = styled.View`
  flex-flow: row nowrap;
`;
const UserName = styled.Text``;
const UserActivity = styled.Text``;
const UserComment = styled.Text``;

export default Comment;

type Props = {};
