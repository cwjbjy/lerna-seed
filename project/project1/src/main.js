import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  getGlobalRequestUrl
} from './config/url'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

getGlobalRequestUrl().then(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
})
