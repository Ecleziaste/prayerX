import {createReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DeskType} from '../types';
import {getColumns} from './actions';

// const initialState: Array<DeskType> = [
//   {title: 'To Do', id: '1'},
//   {title: 'In Progress', id: '2'},
//   {title: 'Completed', id: '3'},
// ];

// export const desksReducer = createReducer(initialState, builder => {

// });

const initialState = [] as Array<Columns>;

const userSlice = createSlice({
  name: 'desks',
  initialState,
  reducers: {},
  extraReducers: {
    [getColumns.fulfilled.type]: (
      state,
      action: PayloadAction<Array<Columns>>,
    ) => {
      console.log('action', action);
      return action.payload;
    },
  },
});
const {reducer, actions} = userSlice;

export {reducer, actions};

export type Columns = {
  id: number;
  title: string;
  description: null;
  userId: number;
};
