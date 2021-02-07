import {extendsModules} from '@/extends'
//路由缓存
let GLOBAL_ROUTES=[];

//路由注册
extendsModules(GLOBAL_ROUTES)

const routes = [
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    ...GLOBAL_ROUTES
  ]

  export default routes