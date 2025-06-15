import axiosInstance from "@/api/axios/axiosInstance"
import ENDPOINTS from "@/constant/endpoints.constant"
import { DataArticle } from "@/types/articles"

export const getArticle = (params: any) => {
    return axiosInstance.get(ENDPOINTS.ARTICLE.GET_ALL, { params })
}

export const getCategory = (params: any) => {
    return axiosInstance.get(ENDPOINTS.CATEGORIES.GET_ALL, { params })
}

export const postArticle = (data: DataArticle) => {
    return axiosInstance.post(ENDPOINTS.ARTICLE.CREATE, data)
}

export const deleteArticle = (id: string) => {
    return axiosInstance.delete(ENDPOINTS.ARTICLE.DELETE.replace(':id', id))
}

export const getDetailArticle = (id: string) => {
    return axiosInstance.get(ENDPOINTS.ARTICLE.DETAIL.replace(':id', id))
}

export const updateArticle = (payload: any) => {
    console.log('payload', payload)
    return axiosInstance.put(ENDPOINTS.ARTICLE.UPDATE.replace(":id", `${payload?.id}`), payload?.data)
}