import axios from 'axios'

axios.defaults.timeout = 240000;

const http = axios.create({
    'timeout': 240000,
    'baseURL': process.env.BASE_URL,
    'validateStatus': (status) => status >= 200 && status <= 500,
    'withCredentials': true
});

http.interceptors.request.use((config) => {
    let token = window.sessionStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = token;
    }
    return config;
})


export default http;

// export const get = (url, params) => {
//     return http.get(url, {params: params});
// }

// export const post = (url, params) => {
//     return http.post(url, JSON.stringify(params));
// }
