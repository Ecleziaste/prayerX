import {createReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getColumns, newColumn} from './actions';

const initialState = [] as Array<Column>;

const userSlice = createSlice({
  name: 'desks',
  initialState,
  reducers: {
    // newColumn: (state, action: PayloadAction<Column>) =>
    //   state.unshift(action.payload),
  },
  extraReducers: {
    [getColumns.fulfilled.type]: (
      state,
      action: PayloadAction<Array<Column>>,
    ) => {
      return action.payload;
    },
    // [newColumn.fulfilled.type]: (state, action: PayloadAction<Column>) => {
    //   console.log('action', action);
    //   return state.unshift(action.payload);
    // },
  },
});
const {reducer, actions} = userSlice;

export {reducer, actions};

export type Column = {
  id: number;
  title: string;
  description: null | string;
  userId: number;
};
