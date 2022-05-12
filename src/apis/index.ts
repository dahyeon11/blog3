import axios, { AxiosInstance, AxiosPromise } from "axios";

const BASE_URL = 'api2.dahyeon.us';
const token = ''


const axInstance: any = (url: string, options: {}) => {
    const instance = axios.create({
        baseURL: BASE_URL,
        url: url,
        ...options
    })
    return instance
}

const axAuthInstance = (url: string, options: {}) => {
    const instance: AxiosInstance = axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: `Bearer ${token}`
        },
        ...options
    })
    return instance
}

export { axInstance, axAuthInstance }