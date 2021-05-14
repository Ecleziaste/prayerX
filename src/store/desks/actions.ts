import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {ActionType} from '../types';
import {ColumnsApi, addColumnApi} from '../desks/api';

export const changeTitle = createAction<ActionType>('desks/change');

export const getColumns = createAsyncThunk<any, number>(
  'columns',
  async params => {
    const {data} = await ColumnsApi();
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

export const newColumn = createAsyncThunk<any, Params>(
  'columns',
  async params => {
    const {data} = await addColumnApi(params);
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

type Params = {title: string; description: string | null};
