/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-12-30 17:46:21
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-07 15:30:34
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueStorage from "vue-ls";
import { VueAxios } from "@/utils/request";
import { Notification } from "element-ui";
import "@/plugins/element.js";
import "@/router/routeGuard.js";
import "@/assets/fontSize/font.css";
Vue.config.productionTip = false;
let options = {
  namespace: "WEB_", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local" // storage name session, local, memory
};
Vue.mixin({
  methods: {
    notice(type, message) {
      switch (type) {
        case "success":
          Notification.success({
            title: "成功",
            message: message
          });
          break;
        case "warning":
          Notification.warning({
            title: "警告",
            message: message
          });
          break;
        case "error":
          Notification.error({
            title: "出错了",
            message: message
          });
          break;
        default:
          Notification.info({
            title: "提示",
            message: message
          });
          break;
      }
    },
    submitForm(formName, callback) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(valid);
          callback();
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});
Vue.use(VueStorage, options);
Vue.use(VueAxios);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
