import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {ActionType} from '../types';
import {getPrayersApi, createPrayerApi} from './api';
import {Prayer} from './slice';

export const changeTitle = createAction<ActionType>('cards/change');

export const getCards = createAsyncThunk<Prayer>('cards/getCards', async () => {
  const {data} = await getPrayersApi();
  if (data.message) {
    throw new Error('Error');
  }

  return data;
});

export const addCard = createAsyncThunk<Prayer, Params>(
  'cards/addCard',
  async params => {
    const {data} = await createPrayerApi(params);
    if (data.message) {
      throw new Error('Error');
    }

    console.log(data);
    return data;
  },
);
//TODO: GET и PUT, чтобы поствить checked d конкретную таску??
type Params = {
  title: string;
  description: string;
  checked: boolean;

  columnId: number;
};
