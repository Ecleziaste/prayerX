import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {ActionType} from '../types';
import {PrayersApi, addPrayerApi} from './api';
import {Prayer} from './slice';

export const changeTitle = createAction<ActionType>('cards/change');

export const getPrayers = createAsyncThunk<any>(
  'cards/getCards',
  async params => {
    const {data} = await PrayersApi();
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

export const addPrayer = createAsyncThunk<Prayer, Params>(
  'cards/addCard',
  async params => {
    const {data} = await addPrayerApi(params);
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

type Params = {
  title: string;
  description: string;
  checked: boolean;
  deskId: number;
};
