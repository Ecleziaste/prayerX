import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {ActionType} from '../types';
import {getCommentsApi, createCommentApi} from './api';
import {Comment} from './slice';
// import {selectCardById} from '../cards/selectors';

export const changeTitle = createAction<ActionType>('cards/change');

export const getComments = createAsyncThunk<Comment>(
  'comments/getComments',
  async () => {
    const {data} = await getCommentsApi();
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

export const addComment = createAsyncThunk<Comment, Params>(
  'comments/addComment',
  async params => {
    const {data} = await createCommentApi(params);
    console.log('data to create comment', data);

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
