import { AxiosInstance } from "axios";
import axios from 'axios'

const instance: AxiosInstance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1.4',
    headers: {
        'X-API-KEY': 'TA7EXBR-QV34PAJ-K9WWZG8-Q0SFSPP'
    }
})

export const oldInstance: AxiosInstance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1',
    headers: {
        'X-API-KEY': 'TA7EXBR-QV34PAJ-K9WWZG8-Q0SFSPP'
    }
})


export default instance
