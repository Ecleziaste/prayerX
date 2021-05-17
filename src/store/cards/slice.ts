import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getCards, addCard} from './actions';

const initialState = [] as Array<Prayer>;

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: {
    [getCards.fulfilled.type]: (
      state,
      action: PayloadAction<Array<Prayer>>,
    ) => {
      return action.payload;
    },
    [addCard.fulfilled.type]: (state, action: PayloadAction<Prayer>) => {
      return [action.payload, ...state];
    },
  },
});
const {reducer, actions} = cardsSlice;

export {reducer, actions};

export type Prayer = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds: Array<number>;

  message: string;

  answered: boolean;
  users: number;
  prayers: number;
  subscribed: boolean;
};
