import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getPrayers, addPrayer} from './actions';

const initialState = [] as Array<Prayer>;

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: {
    [getPrayers.fulfilled.type]: (
      state,
      action: PayloadAction<Array<Prayer>>,
    ) => {
      return action.payload;
    },
    [addPrayer.fulfilled.type]: (state, action: PayloadAction<Prayer>) => {
      return [action.payload, ...state];
    },
  },
});
const {reducer, actions} = tasksSlice;

export {reducer, actions};

export type Prayer = {
  title: string;
  description: string;
  checked: boolean;
  message: string;
  id: number;
  deskId: number;
  answered: boolean;

  subscribed: boolean;
};
