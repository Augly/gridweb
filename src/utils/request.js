/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-07-15 10:33:40
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-06 12:45:05
 */
import Vue from "vue";
import axios from "axios";
import store from "@/store";
import { VueAxios } from "./axios";
import notification from "element-ui/packages/notification";
import { ACCESS_TOKEN } from "@/store/config.js";

// 创建 axios 实例
const service = axios.create({
  baseURL: "/api", // api base_url
  timeout: 300000 // 请求超时时间
});

const err = error => {
  if (error.message.includes("timeout")) {
    // 判断请求异常信息中是否含有超时timeout字符串
    notification.error({
      message: "提示信息",
      description: "链接超时"
    });
  }
  if (error.response) {
    const data = error.response.data;
    const token = Vue.ls.get(ACCESS_TOKEN);
    if (error.response.status === 403) {
      notification.error({
        message: "Forbidden",
        description: data.message
      });
    }

    if (error.response.status === 500) {
      notification.error({
        message: "提示信息",
        description: "服务器异常"
      });
    }
    if (
      error.response.status === 401 &&
      !(data.result && data.result.isLogin)
    ) {
      notification.error({
        message: "Unauthorized",
        description: "Authorization verification failed"
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
  const token = Vue.ls.get(ACCESS_TOKEN);
  if (token) {
    config.headers["OKCLOUD-TOKEN"] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config;
}, err);

// response interceptor
service.interceptors.response.use(response => {
  if (response.data.code === 10000) {
    notification.warning({
      message: "提示",
      description: response.data.message
    });
    return false;
  } else if (response.data.code === 500) {
    notification.warning({
      message: "提示",
      description: response.data.message
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
