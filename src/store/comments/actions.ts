import {createAsyncThunk} from '@reduxjs/toolkit';
import {getCommentsApi, createCommentApi} from './api';
import {Comment} from './slice';

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
