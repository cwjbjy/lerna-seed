
import HttpClient from './lib/httpClient.js'
import enumAuth from './lib/auth.js'

let baseUrl = CWJ_GLOBAL_API.BASE_URL
let API = {};

API.login = (params) => {
    return HttpClient.post(`${baseUrl}/login`, {
        data:params,
        auth:enumAuth.Level03
    })
}

API.register = (params) => {
    return HttpClient.post(`${baseUrl}/register`, {
        data:params,
        auth:enumAuth.Level03
    })
}

export default API