import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {signUpApi} from '../user/api';

export const setUser = createAction<any>('user/set');

export const signUp = createAsyncThunk<any, Params>(
  'auth/signUp',
  async params => {
    const {data} = await signUpApi(params);
    console.log('data', data);
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

type Params = {email: string; password: string; name: string};
