import axiosInstance from "@/api/axios/axiosInstance"
import ENDPOINTS from "@/constant/endpoints.constant"

export const getArticle = (params: any) => {
    return axiosInstance.get(ENDPOINTS.ARTICLE.GET_ALL, { params })
}

export const getCategory = (params: any) => {
    return axiosInstance.get(ENDPOINTS.CATEGORIES.GET_ALL, { params })
}

export const postArticle = (payload: any) => {
    return axiosInstance.post(ENDPOINTS.ARTICLE.CREATE, payload?.data)
}

export const deleteArticle = (id: string) => {
    return axiosInstance.delete(ENDPOINTS.ARTICLE.DELETE.replace(':id', id))
}

export const getDetailArticle = (id: string) => {
    return axiosInstance.get(ENDPOINTS.ARTICLE.DETAIL.replace(':id', id))
}

export const updateArticle = (payload: any) => {
    return axiosInstance.put(ENDPOINTS.ARTICLE.UPDATE.replace(":id", `${payload?.id}`), payload?.data)
}