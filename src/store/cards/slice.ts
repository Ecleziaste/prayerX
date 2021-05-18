import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getCards, addCard, getCard} from './actions';

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
    [getCard.fulfilled.type]: (state, action: PayloadAction<Prayer>) => {
      const newState = state.map(prayer => {
        if (prayer.id === action.payload.id) {
          return action.payload;
        }
        return prayer;
      });
      return newState;
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
};
