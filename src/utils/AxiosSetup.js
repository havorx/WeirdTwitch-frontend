const axios = require('axios');

export const myAxios = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

//every request must have authorization header (token and refreshToken)
myAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = 'Bearer ' + token;
    return config;
});

myAxios.interceptors.response.use(function (response) {
    if (response) {
        return response;
    }
}, async function (error) {
    if (error.response) {
        /* if error code = 401 (token failure) -> get new token using refreshToken and redo the previous request using
            new token*/
        if (error.response.statusText === 'Unauthorized' && error.response.status === 401) {
            const refreshToken = localStorage.getItem('refreshToken');
            await axiosPost('/refreshToken', {refreshToken}).then(response => {
                if (response && response.data) {
                    const data = response.data;
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('refreshToken', data.refreshToken);
                    error.config.headers['Authorization'] = 'Bearer ' + data.token;
                    return myAxios.request(error.config);
                }
            });
        }
        //if error code = 404 (refreshToken failure) -> remove existing token and redirect to homepage
        else if ((error.response.status === 404 && (error.response.data === 'refreshToken not found' || error.response.data === 'User not found')) ||
            (error.response.status === 400 && error.response.data === 'no refreshToken in request')
        ) {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('role');
            localStorage.removeItem('refreshToken');
            console.log(error);
            // window.location = "/"
        }
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
