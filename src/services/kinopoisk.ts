import instance from '@/plugins/axios'

export const getFilmById = async (id: number) => {
    const response = await instance.get(`/movie/${id}`)
    return response.data
}

import { AxiosRequestConfig } from 'axios';

interface MyAxiosRequestConfig extends AxiosRequestConfig {
  params?: {
    [key: string]: any;
  };
}

export const getFilms = async (params?: Object) => {
  const req = await instance.get<any, any>('/movie', {
    params: params,
  } as MyAxiosRequestConfig);
  return req.data;
};

