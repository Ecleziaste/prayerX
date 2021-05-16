import {AxiosPromise} from 'axios';
import {http} from '../../services/http';
import {Prayer} from './slice';

export const PrayersApi = (): AxiosPromise<Prayer> => {
  return http.get('/prayers');
};

export const addPrayerApi = (payload: AddPrayerType): AxiosPromise<Prayer> => {
  return http.post('/prayers', payload);
};

type AddPrayerType = {
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
};
