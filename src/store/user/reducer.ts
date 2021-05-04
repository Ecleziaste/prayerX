import {createReducer} from '@reduxjs/toolkit';
import {setUser} from './actions';

const initialState: null | boolean = null;

export const userReducer = createReducer(initialState, builder => {
  builder.addCase(setUser, (state, action) => {
    console.log('~~ successful action');
    return (state = action.payload);
  });
});
