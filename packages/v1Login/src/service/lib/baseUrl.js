let auth_url = null; //权限接口

if (process.env.NODE_ENV === 'development') {
    /* 开发环境 */
    auth_url = '//127.0.0.1:9000/api';
} else {
    /* 生产环境 */
    auth_url = 'https://wen.cwjbjy.online/api';
}

export {
    auth_url
}