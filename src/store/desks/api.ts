import {AxiosPromise} from 'axios';
import {http} from '../../services/http';
import {Column} from './slice';

export const ColumnsApi = (): AxiosPromise<Column> => {
  return http.get('/columns');
};

export const addColumnApi = (payload: AddColumn): AxiosPromise<Column> => {
  return http.post('/columns', payload);
};

type AddColumn = {
  title: string;
  description: string | null;
};
