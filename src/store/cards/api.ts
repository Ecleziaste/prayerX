import {AxiosPromise} from 'axios';
import {http} from '../../services/http';
import {Prayer} from './slice';

export const getPrayersApi = (): AxiosPromise<Prayer> => {
  return http.get('/prayers');
};

export const createPrayerApi = (
  payload: CreatePrayer,
): AxiosPromise<Prayer> => {
  const {columnId, ...body} = payload;
  return http.post(`/columns/${String(columnId)}/prayers`, body);
};

export const updatePrayerApi = (
  payload: UpdatePrayer,
): AxiosPromise<Prayer> => {
  const {prayerId, ...body} = payload;
  return http.put(`/prayers/${String(prayerId)}`, body);
};

export const getPrayerApi = (payload: GetPrayer): AxiosPromise<Prayer> => {
  const {prayerId} = payload;
  return http.put(`/prayers/${String(prayerId)}`);
};

type CreatePrayer = {
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
};

type UpdatePrayer = {
  prayerId: number;
  title: string;
  description: string;
  checked: boolean;
};

type GetPrayer = {
  prayerId: number;
};
