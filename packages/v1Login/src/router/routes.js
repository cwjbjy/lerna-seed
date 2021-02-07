import config from '../config'
const Login = () => import( /* webpackChunkName: "Login" */ '../views/login.vue')

const routes = [{
    path: `/${config.projectName}/login`,
    name: `${config.projectName}_login`,
    component: Login
}]

export default routes