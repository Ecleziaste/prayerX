import {AxiosPromise} from 'axios';
import {http} from '../../services/http';
import {User} from './slice';

export const signUpApi = (payload: UserSignUp): AxiosPromise<User> => {
  return http.post('/auth/sign-up', payload);
};

type UserSignUp = {
  email: string;
  password: string;
  name: string;
};
