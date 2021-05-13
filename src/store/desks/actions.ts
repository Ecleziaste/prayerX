import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {ActionType} from '../types';
import {ColumnsApi} from '../desks/api';

export const changeTitle = createAction<ActionType>('desks/change');

export const getColumns = createAsyncThunk<any, Params>(
  'columns',
  async params => {
    const {data} = await ColumnsApi(params);
    console.log('data', data);
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

type Params = {email: string; password: string; name: string};
