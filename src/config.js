import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://my-bloggin-app.herokuapp.com/api/"
})