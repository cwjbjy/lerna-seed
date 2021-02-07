import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  getGlobalRequestUrl
} from './config/url'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message
} from 'element-ui'
Vue.use(Button)
  .use(Form)
  .use(FormItem)
  .use(Input)
Vue.prototype.$message = Message;
Vue.config.productionTip = false

getGlobalRequestUrl().then(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
})
