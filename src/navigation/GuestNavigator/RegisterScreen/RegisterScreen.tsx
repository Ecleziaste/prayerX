import React from 'react';
import {Form, Field} from 'react-final-form';
import {Alert, Image} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {setUser, signUp} from '../../../store/user/actions';
import ButtonLong from '../../../components/ButtonLong';
import InputField from '../../../components/InputField';
import InputContainer from '../../../components/InputContainer';

export const RegisterScreen: React.FC<Props> = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = async (values: ValuesType) => {
    const data = {
      email: 'dtestqwe132@mail.ru',
      password: '1234',
      name: 'Petya',
    };
    try {
      await dispatch(signUp(data));
    } catch (err) {
      Alert.alert(err.message);
    }

    // console.log('values', values);
    // if (values.Password === values.CheckPassword) {
    //   dispatch(setUser(true));
    // } else {
    //   console.log('пароли в полях не совпадают');
    // }
  };

  return (
    <Container>
      <BackBtn onPress={() => navigation.goBack()}>
        <Image source={require('../../../icons/CircledArrowLeft.png')}></Image>
      </BackBtn>
      <Title>Please register</Title>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <FormWrapper>
            <InputContainer>
              <Field
                name="Login"
                component={InputField}
                validate={value => (value ? undefined : 'Required')}
                placeholder="Введите имя пользователя"
              />
            </InputContainer>
            <InputContainer>
              <Field
                name="Password"
                component={InputField}
                validate={value => (value ? undefined : 'Required')}
                placeholder="Введите пароль"
              />
            </InputContainer>
            <InputContainer>
              <Field
                name="CheckPassword"
                component={InputField}
                validate={value => (value ? undefined : 'Required')}
                placeholder="Повторите пароль"
              />
            </InputContainer>

            <ButtonLong text="register" handlerFunc={handleSubmit}></ButtonLong>
          </FormWrapper>
        )}></Form>
    </Container>
  );
};

export default RegisterScreen;

type Props = {onSubmit: (values: ValuesType) => void};

type ValuesType = {
  Login: string;
  Password: string;
  CheckPassword: string;
};

const Container = styled.View`
  margin: 0;
  padding: 0;
  background: #ffffff;
  flex: 1;
  align-self: stretch;
  align-items: center;
`;
const Title = styled.Text`
  margin-bottom: 60px;
  padding-top: 10px;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;
const FormWrapper = styled.View`
  width: 100%;
  padding: 0 20px 0 20px;
  justify-content: center;
`;
const BackBtn = styled.TouchableOpacity`
  position: absolute;
  margin: 0 auto;
  top: 20px;
  left: 12px;
  width: 24px;
  height: 24px;
`;
