import { store } from "@/store";
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";


const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const { token, auth } = store.getState().auth.core
    if (auth && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}

const onRequestError = (error: AxiosError) => Promise.reject(error)

const onResponse = (response: AxiosResponse): AxiosResponse => response


const onResponseError = (error: AxiosError) => {
    if (error?.response?.status === 430) {
        // store.dispatch()
    }
    return Promise.reject(error)
}

export const setupInterceptores = () => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError)
}