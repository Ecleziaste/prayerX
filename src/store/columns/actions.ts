import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {ActionType} from '../types';
import {getColumnsApi, createColumnApi} from './api';
import {Column} from './slice';

export const changeTitle = createAction<ActionType>('columns/change');

export const getColumns = createAsyncThunk<Column>(
  'columns/getColumns',
  async () => {
    const {data} = await getColumnsApi();
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

export const addColumn = createAsyncThunk<Column, Params>(
  'columns/addColumn',
  async params => {
    const {data} = await createColumnApi(params);
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

type Params = {title: string; description: string | null};
