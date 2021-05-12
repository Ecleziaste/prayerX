import {API_URL} from '../constants';
import Axios, {AxiosError, AxiosInstance} from 'axios';

export class Http {
  constructor(private readonly _axios: AxiosInstance) {}
  setAuthorizationHeader(token: string): void {
    console.log('token', token);

    this._axios.defaults.headers.Authorization = `Bearer ${token}`;
  }
  unsetAuthorizationHeader(): void {
    delete this._axios.defaults.headers.Authorization;
  }

  get get() {
    return this._axios.get;
  }
  get post() {
    return this._axios.post;
  }
  get put() {
    return this._axios.put;
  }
  get patch() {
    return this._axios.patch;
  }
  get delete() {
    return this._axios.delete;
  }
  get request() {
    return this._axios.request;
  }
  get axios(): AxiosInstance {
    return this._axios;
  }
}
export const http = new Http(
  Axios.create({
    baseURL: API_URL,
    timeout: 60000,
  }),
);
