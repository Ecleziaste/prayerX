import {AxiosPromise} from 'axios';
import {http} from '../../services/http';
import {Column} from './slice';

export const getColumnsApi = (): AxiosPromise<Column> => {
  return http.get('/columns');
};

export const createColumnApi = (
  payload: createColumnType,
): AxiosPromise<Column> => {
  return http.post('/columns', payload);
};

type createColumnType = {
  title: string;
  description: string | null;
};
