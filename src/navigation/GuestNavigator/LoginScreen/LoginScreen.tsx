import React from 'react';
import {Form, Field} from 'react-final-form';
import {Text, View, Alert} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import AppRoutes from '../../route';
import ButtonLong from '../../../components/ButtonLong';
import InputField from '../../../components/InputField';
import InputContainer from '../../../components/InputContainer';
import {signIn} from '../../../store/user/actions';

const LoginScreen: React.FC<Props> = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = async (values: ValuesType) => {
    const data = {
      email: values.Email,
      password: values.Password,
    };
    try {
      await dispatch(signIn(data));
    } catch (err) {
      Alert.alert(err.message);
    }
  };

  return (
    <Container>
      <Title>Please log in</Title>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <FormWrapper>
            <InputContainer>
              <Field
                name="Email"
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

            <ButtonLong text="submit" handlerFunc={handleSubmit} />
          </FormWrapper>
        )}
      />
      <View>
        <Text>or</Text>
      </View>
      <View>
        <ButtonLong
          text="register"
          handlerFunc={() => {
            navigation.navigate(AppRoutes.RegisterScreen);
          }}
        />
      </View>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  margin: 0;
  padding: 0;
  background: #ffffff;
  flex: 1;
  align-self: stretch;
  align-items: center;
  justify-content: center;
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

export default LoginScreen;

type Props = {
  onSubmit: (values: ValuesType) => void;
};

type ValuesType = {
  Email: string;
  Password: string;
};
