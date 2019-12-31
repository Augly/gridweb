/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-12-30 17:46:21
 * @LastEditors  : zero
 * @LastEditTime : 2019-12-30 17:59:49
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./config/elemnt";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
