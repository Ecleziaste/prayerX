import React, {useRef} from 'react';
import {Form, Field} from 'react-final-form';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styled from 'styled-components';

export const UserLogin: React.FC<Props> = () => {
  const myInput: any = useRef();

  const onSubmit = (values: ValuesType) => {
    console.log(values.Login);
    console.log(values.Password);
    // console.log(myInput.text);
    // myInput.value.current.clear();
  };

  return (
    <View style={styles.сontainer}>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <View style={styles.formWrapper}>
            <Text style={styles.formTitle}>Please log in</Text>
            <Field name="Login">
              {prop => (
                <TextInput
                  ref={myInput}
                  style={styles.formInput}
                  placeholder="Введите имя пользователя"
                  {...prop.input}
                  // передача данных через final-form работает только с input?
                />
              )}
            </Field>
            <Field name="Password">
              {prop => (
                <TextInput
                  style={styles.formInput}
                  placeholder="Введите пароль"
                  {...prop.input}
                />
              )}
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
        <TouchableOpacity style={styles.btnGuest} onPress={() => {}}>
          <Text style={styles.btnGuestText}> Enter like Guest </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const Input = styled.TextInput`
//   width: 100%;
//   align-self: center;
//   border: none;
//   border-radius: 4px;
//   &:focus {
//     outline: none;
//     box-shadow: 0 0 5px 1px #036788;
//     background: white;
//   }
// `;
// Может styled components??
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
  formTitle: {
    marginBottom: 60,
    fontWeight: '500',
    fontSize: 34,
    textAlign: 'center',
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

export default UserLogin;

type Props = {
  onSubmit: (values: ValuesType) => void;
};

type ValuesType = {
  Login: string;
  Password: string;
};
