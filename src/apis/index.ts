import axios, { AxiosInstance } from "axios";

const BASE_URL = 'api2.dahyeon.us';
const token = ''


const axiosApi: any = (url: string, options: {}) => {
    const instance = axios.create({
        baseURL: BASE_URL,
        ...options
    })
    return instance
}

const axiosAuthApi = (url: string, options: {}): => {
    const instance: AxiosInstance = axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: `Bearer ${token}`
        },
        ...options
    })
    return instance
}

export { axiosApi, axiosAuthApi }