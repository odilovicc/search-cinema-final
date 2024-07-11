import instance, { oldInstance } from '@/plugins/axios'
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const getFilmById = async (id: number) => {
  const response = await instance.get(`/movie/${id}`)
  return response.data
}


interface MyAxiosRequestConfig extends AxiosRequestConfig {
  params?: {
    [key: string]: any;
  };
}

export const getFilms = async (params?: Object) => {
  const req: AxiosRequestConfig = await instance.get<any, any>('/movie', {
    params: params,
  } as MyAxiosRequestConfig);
  return req.data
};

export const searchFilm = async (query: string) => {
  const req = await instance.get<any, any>('/movie/search', {
    params: {
      query: query,
    }
  } as MyAxiosRequestConfig);

  return req.data
}

export const getGenresOld = async (params?: Object) => {
  const req = await oldInstance.get<any, any>('/movie/possible-values-by-field', {
    params: params,
  } as MyAxiosRequestConfig);
  return req.data;
}