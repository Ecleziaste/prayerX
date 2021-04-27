import React from 'react';
import {Form, Field} from 'react-final-form';
import {TouchableOpacity, Button, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export const UserLogin: React.FC<Props> = () => {
  const onSubmit = (values: ValuesType) => {
    console.log(values.Login);
    console.log(values.Password);
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
                  style={styles.formInput}
                  placeholder="Введите имя пользователя"
                  {...prop.input}
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
              <TouchableOpacity style={styles.formBtn} onPress={handleSubmit}>
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

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    // flexDirection: 'column',
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
    // top: 0,
    marginBottom: 60,
    // paddingVertical: 10,
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
