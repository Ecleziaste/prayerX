import React from 'react';
import {Form, Field} from 'react-final-form';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/core';

const LoginScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  const onSubmit = (values: ValuesType) => {
    console.log('values', values);
    // if (values.Login === '1' && values.Password === '1') {
    //   console.log('user has logged in, user variable will set to TRUE');
    // } else {
    //   console.log('no such user, click REGISTER to register :)');
    //   navigation.navigate('Home');
    // }
  };

  return (
    <Container>
      <Title>Please log in</Title>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <View style={styles.formWrapper}>
            {/* <Field
              name="Login"
              component="input"
              // component={Input}
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
            <View>
              <TouchableOpacity
                style={styles.formBtn}
                onPress={() => {
                  handleSubmit();
                }}>
                <Text style={styles.formBtnText}> SUBMIT </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}></Form>
      <View>
        <Text>or</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnGuest}
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          <Text style={styles.btnGuestText}> REGISTER</Text>
        </TouchableOpacity>
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
const Input = styled.TextInput`
  width: 100%;
  align-self: center;
  border: 1px black solid;
  border-radius: 4px;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 1px #036788;
    background: white;
  }
`;

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    marginTop: 0,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrapper: {
    margin: 0,
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'center',
  },

  formInput: {
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 6,
    marginVertical: 6,
    padding: 15,
    fontWeight: '300',
    fontSize: 16,
    textAlign: 'left',
  },
  formBtn: {
    marginVertical: 15,
    width: '50%',
    height: 60,
    backgroundColor: 'rgb(96, 199, 49)',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  formBtnText: {
    fontWeight: '700',
    fontSize: 20,
    letterSpacing: 2,
    textAlign: 'center',
  },
  btnGuest: {
    marginVertical: 15,
    padding: 5,
    width: '50%',
    height: 30,
    backgroundColor: 'rgb(127, 132, 204)',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  btnGuestText: {
    fontWeight: '400',
    fontSize: 16,
    letterSpacing: 1,
    textAlign: 'center',
  },
});

export default LoginScreen;

type Props = {
  onSubmit: (values: ValuesType) => void;
  userHasLogged: () => void;
};

type ValuesType = {
  Login: string;
  Password: string;
};
