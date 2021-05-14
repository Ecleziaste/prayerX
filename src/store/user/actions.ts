import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {signUpApi, signInApi} from '../user/api';
import {User} from './slice';

export const setUser = createAction<any>('user/set');

export const signUp = createAsyncThunk<any, Params>(
  'user/signUp',
  async params => {
    const {data} = await signUpApi(params);

    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

export const signIn = createAsyncThunk<User, SignInParams>(
  'user/signIn',
  async params => {
    const {data} = await signInApi(params);

    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

type Params = {email: string; password: string; name: string};
type SignInParams = {email: string; password: string};
