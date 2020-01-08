/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2020-01-08 17:35:32
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-08 17:40:00
 */
import { axios } from "@/utils/request";
import Qs from "qs";
/**
 * @name:myAppList
 * @msg:我的app列表
 * @param {type}
 * @return:
 */
export function myAppList(parameter) {
  return axios({
    url: "/app/myAppList",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 * @name:getAuthInfo
 * @msg:app详情
 * @param {type}
 * @return:
 */
export function getAuthInfo(parameter) {
  return axios({
    url: "/app/getAuthInfo",
    method: "post",
    data: Qs.stringify(parameter)
  });
}

/**
 * @name:updateApp
 * @msg:用户_修改app
 * @param {type}
 * @return:
 */
export function updateApp(parameter) {
  return axios({
    url: "/app/updateApp",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 * @name:createApp
 * @msg:创建app
 * @param {type}
 * @return:
 */
export function createApp(parameter) {
  return axios({
    url: "/app/createApp",
    method: "post",
    data: parameter
  });
}
/**
 * @name:downloadAppMode
 * @msg:下载app模板
 * @param {type}
 * @return:
 */
export function downloadAppMode(parameter) {
  return axios({
    url: "/app/downloadAppMode",
    method: "post",
    data: parameter
  });
}
