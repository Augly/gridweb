/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-12-30 17:46:21
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-06 13:47:57
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueStorage from "vue-ls";
import { VueAxios } from "@/utils/request";
import "./plugins/element.js";
import "@/config/elemnt";
import "@/router/routeGuard.js";
import "@/assets/fontSize/font.css";
Vue.config.productionTip = false;
let options = {
  namespace: "WEB_", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local" // storage name session, local, memory
};
Vue.use(VueStorage, options);
Vue.use(VueAxios);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
