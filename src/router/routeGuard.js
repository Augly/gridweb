/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-08-29 10:46:33
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-16 14:22:29
 */
import Vue from "vue";
import router from "@/router";
import store from "@/store";
import { setDocumentTitle, domTitle } from "@/utils/domUtil";
import { ACCESS_TOKEN } from "@/store/config.js";

const whiteList = [
  "index",
  "cooperation",
  "registerResult",
  "help",
  "new",
  "newRes",
  "ForgotPassword",
  "register"
];
router.beforeEach((to, from, next) => {
  if (!from.name && to.name !== "index") {
    next({ path: "/index" });
  }
  to.meta &&
    typeof to.meta.title !== "undefined" &&
    setDocumentTitle(`${to.meta.title} - ${domTitle}`);
  if (Vue.ls.get(ACCESS_TOKEN)) {
    next();
  } else {
    if (whiteList.includes(to.name)) {
      store.dispatch("setLogin", false);
      next();
    } else {
      next({ path: "/index" });
      store.dispatch("setLogin", true);
    }
  }
});
router.afterEach(route => {
  if (route.meta.clearBread) {
    store.dispatch("setBread", "clear");
  } else {
    store.state.breadList.includes({
      path: route.path,
      name: route.meta.title
    });
    for (let i = 0; i < store.state.breadList.length; i++) {
      if (store.state.breadList[i].name === route.meta.title) {
        return;
      }
    }
    store.dispatch("setBread", {
      path: route.path,
      name: route.meta.title
    });
  }
});
