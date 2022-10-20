import API from '../constants/API';
import { axiosInstance } from '../utils/API';

export const addUser = async (payload) => {
    try{
        const result = await axiosInstance({
            method: 'post',
            url: `${API.USER}${API.CREATE}`,
            data: payload
        })
        return result
    } catch (e) {
        return e.response;
    }
}