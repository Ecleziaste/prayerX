import {AxiosPromise} from 'axios';
import {http} from '../../services/http';
import {Prayer} from './slice';

export const getPrayersApi = (): AxiosPromise<Prayer> => {
  return http.get('/prayers');
};

//createPrayer
export const createPrayerApi = (
  payload: CreatePrayerType,
): AxiosPromise<Prayer> => {
  const {columnId, ...body} = payload;
  return http.post(`/columns/${String(columnId)}/prayers`, body);
};

type CreatePrayerType = {
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
};
