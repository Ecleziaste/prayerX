import React from 'react';
import {Image} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/core';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {selectTaskById} from '../../../store/tasks/selectors';
import styled from 'styled-components/native';
import {Form, Field} from 'react-final-form';
import InputField from '../../../components/InputField';
import Member from './Member';
import Comment from './Comment';

const TaskScreen: React.FC<Props> = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {title} = route.params;

  const onSubmit = (values: any) => {
    console.log('values', values);
  };

  return (
    <Container>
      <Header>
        <BackBtn onPress={() => navigation.goBack()}>
          <Image source={require('../../../icons/Back/back.png')}></Image>
        </BackBtn>
        <PrayBtn>
          <Image
            source={require('../../../icons/HandsWhite/prayer_line.png')}></Image>
        </PrayBtn>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      </Header>
      <Statistics>
        <StatHeader>
          <StatePic>
            <Image source={require('../../../icons/State/Red.png')}></Image>
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
            <Image source={require('../../../icons/AddWhite.png')}></Image>
          </Addmember>
        </MembersContent>
      </Members>
      <Comments>
        <CommentsTitle>comments</CommentsTitle>
        <CommentsList>
          <Comment />
        </CommentsList>
        <FormWrapper>
          <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
              <AddComment>
                <AddCommentImage onPress={() => handleSubmit()}>
                  <Image
                    source={require('../../../icons/CommentAdd.png')}></Image>
                </AddCommentImage>
                <Field
                  name="CommentText"
                  component={InputField}
                  placeholder="Add a comment..."
                />
              </AddComment>
            )}></Form>
        </FormWrapper>
      </Comments>
    </Container>
  );
};

export default TaskScreen;

type Props = {};

const Container = styled.SafeAreaView`
  margin: 0;
  padding: 0;
  background: #ffffff;
  flex: 1;
  align-self: stretch;
  align-items: center;
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
const CommentsList = styled.View`
  margin-top: 15px;
  border-top-width: 1px;
  border-top-color: #e5e5e5;
`;
const FormWrapper = styled.View`
  padding: 0 15px 20px 15px;
`;
const AddComment = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-flow: row nowrap;
`;
const AddCommentImage = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;
