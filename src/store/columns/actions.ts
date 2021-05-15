import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {ActionType} from '../types';
import {ColumnsApi, addColumnApi} from './api';
import {Column} from './slice';

export const changeTitle = createAction<ActionType>('columns/change');

export const getColumns = createAsyncThunk<any, number>(
  'columns/getColumns',
  async params => {
    const {data} = await ColumnsApi();
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

export const addColumn = createAsyncThunk<Column, Params>(
  'columns/addColumn',
  async params => {
    const {data} = await addColumnApi(params);
    if (data.message) {
      throw new Error('Error');
    }

    return data;
  },
);

type Params = {title: string; description: string | null};
