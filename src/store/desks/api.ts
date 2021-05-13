import {AxiosPromise} from 'axios';
import {http} from '../../services/http';
import {Column} from './slice';

export const ColumnsApi = (): AxiosPromise<Column> => {
  return http.get('/columns');
};

// export const ColumnsApi = (payload: Array<Columns>): AxiosPromise<Columns> => {
//   return http.get('/columns', payload);
// };

type ColumnsByUserId = {
  userId: number;
};
