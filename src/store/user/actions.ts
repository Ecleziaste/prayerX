import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {signUpApi, signInApi} from '../user/api';

export const setUser = createAction<any>('user/set');

export const signUp = createAsyncThunk<any, Params>(
  'auth/signUp',
  async params => {
    const {data} = await signUpApi(params);

    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

export const signIn = createAsyncThunk<any, SignInParams>(
  'auth/signIn',
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
