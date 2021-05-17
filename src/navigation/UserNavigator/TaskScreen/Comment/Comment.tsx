import React from 'react';
import {RootState} from '../../../../store';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectCommentById,
  selectCommentsIdsByPrayerId,
} from '../../../../store/comments/selectors';

const Comment: React.FC<Props> = ({id}) => {
  const {body} = useSelector((state: RootState) =>
    selectCommentById(state, id),
  )!;

  return (
    <Container>
      <UserPic>{/* <Image></Image> */}</UserPic>
      <Info>
        <TopRow>
          <UserName>Johny</UserName>
          <UserActivity>4 days ago</UserActivity>
        </TopRow>
        <UserComment>{body}</UserComment>
      </Info>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 74px;
  flex-flow: row nowrap;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;
const UserPic = styled.View`
  width: 46px;
  height: 46px;
  margin: 14px 9px 14px 12px;
  /* justify-content: center;
  align-items: center; */
  border-width: 1px;
  border-color: goldenrod;
  border-radius: 50px;
`;
const Info = styled.View``;
const TopRow = styled.View`
  flex-flow: row nowrap;
  margin-top: 15px;
`;
const UserName = styled.Text`
  margin-right: 5px;
  font-family: SF UI Text;
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
`;
const UserActivity = styled.Text`
  align-self: flex-end;
  font-family: SF UI Text;
  font-size: 13px;
  line-height: 16px;
  color: #9c9c9c;
`;
const UserComment = styled.Text`
  margin-top: 2px;
  font-family: SF UI Text;
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
`;

export default Comment;

type Props = {id: number};
