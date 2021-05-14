import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getColumns, addColumn} from './actions';

const initialState = [] as Array<Column>;

const columnsSlice = createSlice({
  name: 'desks',
  initialState,
  reducers: {},
  extraReducers: {
    [getColumns.fulfilled.type]: (
      state,
      action: PayloadAction<Array<Column>>,
    ) => {
      return action.payload;
    },
    [addColumn.fulfilled.type]: (state, action: PayloadAction<Column>) => {
      return [action.payload, ...state];
    },
  },
});
const {reducer, actions} = columnsSlice;

export {reducer, actions};

export type Column = {
  id: number;
  title: string;
  description: null | string;
  userId: number;
  message: string;
};
