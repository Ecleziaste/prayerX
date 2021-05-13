import {AxiosPromise} from 'axios';
import {http} from '../../services/http';
import {Columns} from './slice';

export const ColumnsApi = (payload: any): AxiosPromise<Columns> => {
  return http.get('/columns', payload);
};

// export const ColumnsApi = (payload: Array<Columns>): AxiosPromise<Columns> => {
//   return http.get('/columns', payload);
// };

type ColumnsByUserId = {
  userId: number;
};
