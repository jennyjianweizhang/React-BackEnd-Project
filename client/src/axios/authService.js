import axios from 'axios'
import store from '../store/store';

const request = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 20000 
})

request.interceptors.request.use(
    config => {
        if (!config.headers.Authorization ||store.getState().user.user.token) {
            config.headers.Authorization = 'Bearer '+store.getState().user.user.token
        }
        return config
    },
    error => {
        console.log('-----');
        return Promise.reject(error)
    }
)

export default request