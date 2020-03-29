import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

//引入通用样式
import './assets/css/base.css'  // src 

//引入字体比例控制
import './assets/js/font.js'


//引入路由的配置
import router from './plugins/router.js'

//引入服务端配置模块
import server from './config/server.js';
Vue.prototype.$baseUrl = server.baseUrl;//把服务器基础地址，作为实例属性，捆绑到了vue上


//引入axios插件配置
import './plugins/axios'

let vm = new Vue({
  data:{
    bNav:false,
    bFoot:false,
    bLoading:false,
  },
  render: h => h(App),
  router
}).$mount('#app')


// export default vm;