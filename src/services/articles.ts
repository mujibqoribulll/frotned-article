import axiosInstance from "@/api/axios/axiosInstance"
import ENDPOINTS from "@/constant/endpoints.constant"

export const getArticle = (params: any) => {
    return axiosInstance.get(ENDPOINTS.ARTICLE.GET_ALL, { params })
}