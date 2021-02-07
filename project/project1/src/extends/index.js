import v1_login from 'v1_login'

export const extendsModules = (GLOBAL_ROUTES) =>{
    v1_login.register(GLOBAL_ROUTES)
}