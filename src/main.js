// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;

Vue.prototype.$axios=axios;
// 设置axios请求的token
axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
//设置请求头
axios.defaults.headers.post["Content-type"] = "application/json"


//全局注册组件
// import Users from './components/Users.vue';
// Vue.component('users',Users)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})
