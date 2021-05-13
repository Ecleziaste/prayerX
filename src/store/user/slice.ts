import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setUser, signUp} from './actions';

const initialState = null as null | User;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.fulfilled.type]: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
  },
});

const {reducer, actions} = userSlice;

export {reducer, actions};

export type User = {
  email: string;
  password: string;
  name: string;
  token: string;
  columns: Array<any>;
  id: number;
};
