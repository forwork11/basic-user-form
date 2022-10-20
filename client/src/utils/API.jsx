import axios from 'axios';
import API from '../constants/API';

const axiosInstance = axios.create({
    baseURL: API.BASE,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use(config => {
    return config;
})

axiosInstance.interceptors.response.use(res => res, err => {
    return err.response;
})

export { axiosInstance };