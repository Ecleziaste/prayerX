import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {ActionType} from '../types';
import {
  getPrayersApi,
  createPrayerApi,
  updatePrayerApi,
  getPrayerApi,
} from './api';
import {Prayer} from './slice';

export const changeTitle = createAction<ActionType>('cards/change');

export const getCards = createAsyncThunk<Prayer>('cards/getCards', async () => {
  const {data} = await getPrayersApi();
  if (data.message) {
    throw new Error('Error');
  }

  return data;
});

export const addCard = createAsyncThunk<Prayer, CreateParams>(
  'cards/addCard',
  async params => {
    const {data} = await createPrayerApi(params);
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

export const updateCard = createAsyncThunk<Prayer, UpdateParams>(
  'cards/updateCard',
  async params => {
    const {data} = await updatePrayerApi(params);
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

export const getCard = createAsyncThunk<Prayer, GetParams>(
  'cards/getCard',
  async params => {
    const {data} = await getPrayerApi(params);
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

type CreateParams = {
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
};

type UpdateParams = {
  prayerId: number;
  title: string;
  description: string;
  checked: boolean;
};

type GetParams = {
  prayerId: number;
};
