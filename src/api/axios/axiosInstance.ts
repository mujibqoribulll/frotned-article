import CONFIGS from "@/config"
import axios from "axios"

const axiosInstance = axios.create({
    baseURL: CONFIGS.BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default axiosInstance