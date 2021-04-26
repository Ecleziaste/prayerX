import React from 'react';
import {Form, Field} from 'react-final-form';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export const UserLogin: React.FC<Props> = () => {
  const onSubmit = (values: ValuesType) => {
    console.log(values.Login);
  };

  return (
    <View style={styles.сontainer}>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <View>
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
            <View style={styles.formButton}>
              <Button onPress={handleSubmit} title="Submit"></Button>
            </View>
          </View>
        )}></Form>
      <Text>Some text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 0,
    padding: 5,
    width: '100%',
    alignItems: 'center',
  },
  formTitle: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
  },
  formInput: {
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 6,
    marginVertical: 5,
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontWeight: '300',
    fontSize: 16,
  },
  formButton: {
    marginVertical: 15,
    width: 100,
    alignSelf: 'center',
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
