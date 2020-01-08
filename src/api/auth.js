/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2020-01-08 11:10:03
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-08 16:44:09
 */
import { axios } from "@/utils/request";
import Qs from "qs";
/**
 * @name:submitAuthPer
 * @msg:提交认证-个人
 * @param {type}
 * @return:
 */
export function submitAuthPer(parameter) {
  return axios({
    url: "/con/auth/submitAuthPer",
    method: "post",
    data: parameter
  });
}
/**
 * @name:submitAuthOrg
 * @msg:提交认证-组织机构
 * @param {type}
 * @return:
 */
export function submitAuthOrg(parameter) {
  return axios({
    url: "/con/auth/submitAuthOrg",
    method: "post",
    data: parameter
  });
}
/**
 * @name:submitAuthBus
 * @msg:提交认证-企业
 * @param {type}
 * @return:
 */
export function submitAuthBus(parameter) {
  return axios({
    url: "/con/auth/submitAuthBus",
    method: "post",
    data: parameter
  });
}
/**
 * @name:getMyAuthInfo
 * @msg:认证中心-获取我的认证信息
 * @param {type}
 * @return:
 */
export function getMyAuthInfo(parameter) {
  return axios({
    url: "/con/auth/getMyAuthInfo",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
