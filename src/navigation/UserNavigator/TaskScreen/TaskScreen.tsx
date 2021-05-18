import React from 'react';
import BACK_ICON from '../../../assets/icons/Back/back.png';
import PRAYER_LINE_ICON from '../../../assets/icons/HandsWhite/prayer_line.png';
import STATE_RED_ICON from '../../../assets/icons/State/Red.png';
import ADD_WHITE_ICON from '../../../assets/icons/AddWhite.png';
import COMMENT_ADD_ICON from '../../../assets/icons/CommentAdd.png';
import {Image} from 'react-native';
import {RootState} from '../../../store';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {selectCardById} from '../../../store/cards/selectors';
import styled from 'styled-components/native';
import {Form, Field} from 'react-final-form';
import InputField from '../../../components/InputField';
import Member from './Member';
import Comment from './Comment';
import {TaskScreenProps} from '../UserNavigator';
import {getComments, addComment} from '../../../store/comments/actions';
import {selectCommentsIdsByPrayerId} from '../../../store/comments/selectors';

const TaskScreen: React.FC<Props> = ({
  route: {
    params: {id},
  },
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {title} = useSelector((state: RootState) => selectCardById(state, id))!;
  const commentsIds = useSelector((state: RootState) =>
    selectCommentsIdsByPrayerId(state, id),
  )!;

  const onSubmit = async ({body}: {body: string}) => {
    try {
      await dispatch(addComment({body, prayerId: id}));
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  return (
    <Container>
      <Header>
        <BackBtn onPress={() => navigation.goBack()}>
          <Image source={BACK_ICON} />
        </BackBtn>
        <PrayBtn>
          <Image source={PRAYER_LINE_ICON} />
        </PrayBtn>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      </Header>
      <Statistics>
        <StatHeader>
          <StatePic>
            <Image source={STATE_RED_ICON} />
          </StatePic>
          <StatHeaderText>Last prayed ...</StatHeaderText>
        </StatHeader>
        <StatBody>
          <FirstStatContainer>
            <Count>
              <DateText>July 25 2017</DateText>
            </Count>
            <Info>
              <InfoText>Times Prayed By Others</InfoText>
            </Info>
            <Opened>Opened for 4 days</Opened>
          </FirstStatContainer>
          <StatContainer>
            <Count>
              <CountText>123</CountText>
            </Count>
            <Info>
              <InfoText>Times Prayed Total</InfoText>
            </Info>
          </StatContainer>
          <StatContainer>
            <Count>
              <CountText>63</CountText>
            </Count>
            <Info>
              <InfoText>Times Prayed By Me</InfoText>
            </Info>
          </StatContainer>
          <StatContainer>
            <Count>
              <CountText>60</CountText>
            </Count>
            <Info>
              <InfoText>Times Prayed By Others</InfoText>
            </Info>
          </StatContainer>
        </StatBody>
      </Statistics>
      <Members>
        <MembersTitle>members</MembersTitle>
        <MembersContent>
          <Member />
          <Member />
          <Member />
          <Addmember>
            <Image source={ADD_WHITE_ICON} />
          </Addmember>
        </MembersContent>
      </Members>
      <Comments>
        <CommentsTitle>comments</CommentsTitle>
        <CommentsList
          keyExtractor={item => item + '1'}
          data={commentsIds}
          renderItem={({item}: any) => <Comment id={item} />}
        />
        {/* <View>
          <Comment id={id} />
        </View> */}
      </Comments>
      <FormWrapper>
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <AddComment>
              <AddCommentImage onPress={handleSubmit}>
                <Image source={COMMENT_ADD_ICON} />
              </AddCommentImage>
              <Field
                name="body"
                component={InputField}
                placeholder="Add a comment..."
              />
            </AddComment>
          )}
        />
      </FormWrapper>
    </Container>
  );
};

export default TaskScreen;

interface Props extends TaskScreenProps {}

const Container = styled.SafeAreaView`
  margin: 0;
  padding: 0;
  background: #ffffff;
  flex: 1;
  align-self: stretch;
`;
const Header = styled.View`
  width: 100%;
  height: 130px;
  background: #bfb393;
`;
const BackBtn = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 12px;
  width: 24px;
  height: 24px;
`;
const PrayBtn = styled.TouchableOpacity`
  position: absolute;
  top: 17px;
  right: 15px;
  width: 29px;
  height: 29px;
`;
const TitleWrapper = styled.View`
  margin: 50px 10px 15px 10px;
  padding: 5px;
`;
const Title = styled.Text`
  font-family: SF UI Text;
  font-size: 17px;
  line-height: 27px;
  color: #ffffff;
`;
const Statistics = styled.View`
  width: 100%;
  height: 266px;
`;
const StatHeader = styled.View`
  flex-flow: row nowrap;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
`;
const StatePic = styled.View`
  margin-left: 3px;
  align-items: center;
  width: 24px;
  height: 24px;
`;
const StatHeaderText = styled.Text`
  font-family: SF UI Text;
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
`;
const StatBody = styled.View`
  width: 100%;
  height: 216px;
  flex-flow: row wrap;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
`;
const FirstStatContainer = styled.View`
  width: 50%;
  height: 108px;
  padding-left: 15px;
  justify-content: center;
  border-top-width: 1px;
  border-left-width: 1px;
  border-color: #e5e5e5;
`;
const StatContainer = styled.View`
  width: 50%;
  height: 108px;
  padding-left: 15px;
  justify-content: center;
  border-top-width: 1px;
  border-left-width: 1px;
  border-color: #e5e5e5;
`;
const Count = styled.View``;
const CountText = styled.Text`
  font-family: SF UI Text;
  font-size: 32px;
  line-height: 37px;
  color: #bfb393;
`;
const Info = styled.View``;
const InfoText = styled.Text`
  font-family: SF UI Text;
  font-size: 13px;
  line-height: 15px;
  color: #514d47;
`;
const DateText = styled.Text`
  font-family: SF UI Text;
  font-size: 22px;
  line-height: 26px;
  color: #bfb393;
`;
const Opened = styled.Text`
  position: absolute;
  left: 15px;
  bottom: 11px;
  font-family: SF UI Text;
  font-size: 13px;
  line-height: 15px;
  color: #72a8bc;
`;
const Members = styled.View`
  width: 100%;
  padding: 20px 15px 20px 15px;
  justify-content: flex-start;
`;
const MembersTitle = styled.Text`
  font-family: SF UI Text;
  font-size: 13px;
  line-height: 15px;
  color: rgba(114, 168, 188, 1);
  text-transform: uppercase;
`;
const MembersContent = styled.View`
  justify-content: flex-start;
  flex-flow: row wrap;
  margin-top: 15px;
`;
const Addmember = styled.TouchableOpacity``;
const Comments = styled.View`
  width: 100%;
`;
const CommentsTitle = styled(MembersTitle)`
  padding: 10px 15px 0 15px;
`;
const CommentsList = styled.FlatList`
  margin-top: 15px;
  border-top-width: 1px;
  border-top-color: #e5e5e5;
`;
const FormWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 15px;
`;
const AddComment = styled.View`
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;
const AddCommentImage = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;
