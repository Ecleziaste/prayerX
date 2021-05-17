import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getComments, addComment} from './actions';

const initialState = [] as Array<Comment>;

const cardsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [getComments.fulfilled.type]: (
      state,
      action: PayloadAction<Array<Comment>>,
    ) => {
      return action.payload;
    },
    [addComment.fulfilled.type]: (state, action: PayloadAction<Comment>) => {
      return [action.payload, ...state];
    },
  },
});
const {reducer, actions} = cardsSlice;

export {reducer, actions};

export type Comment = {
  id: number;
  body: string;
  created: string;
  prayerId: number | null;
  userId: number;

  message: string;
};
