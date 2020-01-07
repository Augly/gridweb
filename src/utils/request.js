/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2020-01-06 11:23:40
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-07 16:32:11
 */
import Vue from "vue";
import axios from "axios";
import store from "@/store";
import { Notification, Loading } from "element-ui";
import { VueAxios } from "./axios";
import { ACCESS_TOKEN } from "@/store/config.js";

// 创建 axios 实例
const service = axios.create({
  baseURL: "/api", // api base_url
  timeout: 300000 // 请求超时时间
});

const err = error => {
  Loading.service().close();
  console.log(error.title);
  if (error.title.includes("timeout")) {
    // 判断请求异常信息中是否含有超时timeout字符串
    Notification.error({
      title: "提示信息",
      message: "链接超时"
    });
  }
  if (error.response) {
    const data = error.response.data;
    const token = Vue.ls.get(ACCESS_TOKEN);
    if (error.response.status === 403) {
      Notification.error({
        title: "提示信息",
        message: data.message
      });
    }

    if (error.response.status === 500) {
      Notification.error({
        title: "提示信息",
        message: "服务器异常"
      });
    }
    if (error.response.status === 401) {
      Notification.error({
        title: "提示",
        message: "请登录!"
      });
      if (token) {
        store.dispatch("Logout").then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        });
      }
    }
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use(config => {
  Loading.service({
    lock: true,
    text: "数据加载中...",
    // spinner: "el-icon-loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  const token = Vue.ls.get(ACCESS_TOKEN);
  if (token) {
    config.headers["GRID-TOKEN"] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config;
}, err);

// response interceptor
service.interceptors.response.use(response => {
  Loading.service().close();
  if (response.data.code === 101) {
    Notification.warning({
      title: "提示",
      message: response.data.message
    });
    return false;
  } else {
    return response.data;
  }
}, err);

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, service);
  }
};

export { installer as VueAxios, service as axios };
