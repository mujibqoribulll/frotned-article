import axiosInstance from "@/api/axios/axiosInstance";
import ENDPOINTS from "@/constant/endpoints.constant";


export const postLogin = (data: any) => {
    return axiosInstance.post(ENDPOINTS.AUTH.LOGIN, data)
}

export const postRegister = (data: any) => {
    return axiosInstance.post(ENDPOINTS.AUTH.REGISTER, data)
}
