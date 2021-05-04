import React from 'react';
import {Form, Field} from 'react-final-form';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import AppRoutes from '../../route';
import {setUser} from '../../../store/user/actions';
import ButtonLong from '../../../components/ButtonLong';

const LoginScreen: React.FC<Props> = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = (values: ValuesType) => {
    console.log('values', values);
    if (values.Login === '1' && values.Password === '1') {
      dispatch(setUser(true));
      console.log('~~ user has logged in');
    } else {
      // navigation.navigate(AppRoutes.RegisterScreen);
    }
  };

  return (
    <Container>
      <Title>Please log in</Title>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <FormWrapper>
            {/* <Field
              name="Login"
              // component="input"
              // value={Input => ({...Input.input})}
              // input={TextInput}
              component={Input}
              placeholder="Введите имя пользователя"
            /> */}
            <Field name="Login">
              {prop => (
                <Input placeholder="Введите имя пользователя" {...prop.input} />
              )}
            </Field>
            <Field name="Password">
              {prop => <Input placeholder="Введите пароль" {...prop.input} />}
            </Field>

            <ButtonLong text="submit" handlerFunc={handleSubmit}></ButtonLong>
          </FormWrapper>
        )}></Form>
      <View>
        <Text>or</Text>
      </View>
      <View>
        <ButtonLong
          text="register"
          handlerFunc={() => {
            navigation.navigate('RegisterScreen');
          }}></ButtonLong>
      </View>
    </Container>
  );
};

const Container = styled.View`
  margin: 0;
  padding: 0;
  background: #ffffff;
  flex: 1;
  align-self: stretch;
  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-color: red;
`;
const Title = styled.Text`
  margin-bottom: 60px;
  padding: 0;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;
const FormWrapper = styled.View`
  width: 100%;
  padding: 0 20px 0 20px;
  justify-content: center;
`;

const Input = styled.TextInput`
  width: 100%;
  margin: 16px 15px 0 15px;
  padding: 14px;
  align-self: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  /* &:focus {
    outline: none;
    box-shadow: 0 0 5px 1px #036788;
    background: white;
  } */
`;

export default LoginScreen;

type Props = {
  onSubmit: (values: ValuesType) => void;
};

type ValuesType = {
  Login: string;
  Password: string;
};
