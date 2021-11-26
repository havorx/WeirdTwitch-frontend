const axios = require('axios');

export const myAxios = axios.create({
    baseURL: 'http://localhost:5000',
});

//every request must have authorization header (token and refreshToken)
myAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = 'Bearer ' + token;
    return config;
});

myAxios.interceptors.response.use(function (response) {
    return response;
}, async function (error) {
    /* if error code = 401 (token failure) -> get new token using refreshToken and redo the previous request using 
     new token*/
    if (error.response && error.response.status && error.response.status === 401) {
        const {data} = await axiosPost('/refreshToken', {})
        localStorage.setItem('token', JSON.stringify(data.user));
        error.config.headers['Authorization'] = 'Bearer ' + JSON.stringify(data.user);
        return myAxios.request(error.config);
    }
    //if error code = 6969 (refreshToken failure) -> remove existing token and redirect to homepage
    else if (error.response && error.response.status && error.response.status === 6969) {
        localStorage.removeItem('token')
        window.location = "/"
    }
    //other error
    else {
        return Promise.reject(error);
    }
});

export async function axiosGet(url) {
    const data = await myAxios.get(url);
    return data
}

export async function axiosPost(url, body, options = {}) {
    const data = await myAxios.post(url, body, options)
    return data
}
