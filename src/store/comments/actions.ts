import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {ActionType} from '../types';
import {CommentsApi, addCommentApi} from './api';
import {Comment} from './slice';

export const changeTitle = createAction<ActionType>('cards/change');

export const getComments = createAsyncThunk<Comment>(
  'comments/getComments',
  async () => {
    const {data} = await CommentsApi();
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

export const addComment = createAsyncThunk<Comment, Params>(
  'comments/addComment',
  async params => {
    const {data} = await addCommentApi(params);
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

type Params = {
  body: string;
  prayerId: number;
};
