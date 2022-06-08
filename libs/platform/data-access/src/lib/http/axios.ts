import { HttpClient } from '@cdn-school/core/base';
import axios, { AxiosResponse } from 'axios';

export class HttpAxios implements HttpClient {
  get<T>(url: string) {
    return axios.get<T>(url).then(this.getData());
  }

  async post<T, D>(url: string, value: D) {
    return axios.post<T>(url, value).then(this.getData());
  }

  put<T, D>(url: string, value: Partial<D>) {
    return axios.put<T>(url, value).then(this.getData());
  }

  patch<T, D>(url: string, value: Partial<D>) {
    return axios.patch<T>(url, value).then(this.getData());
  }

  delete<T>(url: string) {
    return axios.patch<T>(url).then(this.getData());
  }

  private getData<T>() {
    return ({ data }: AxiosResponse<T>) => data;
  }
}
