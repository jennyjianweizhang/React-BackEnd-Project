import request from "src/axios/authService";

export function loginApi(data) {
    console.log(data);
    return request({
        url: '/api/login',
        method: 'POST',
        data
    })
}


export function adminApi() {
    return request({
        url: '/admin',
        method: 'POST',
    })
}

export function signupApi(data) {
    return request({
        // url:'/api/signup',
        url: '/api/register',
        method: 'POST',
        data
    })
}