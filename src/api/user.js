/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2020-01-07 09:18:55
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-07 16:36:14
 */
import { axios } from "@/utils/request";
import Qs from "qs";
/**
 *
 *
 * @name:获取手机验证码-用户注册（form传值）
 * @msg:
 * @param {any} parameter
 * @returns
 */
export function registerCode(parameter) {
  return axios({
    url: "/basic/registerCode",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 * @name:获取手机验证码-重置密码（form传值）
 * @msg:
 * @param {type}
 * @return:
 */
export function resetPwdCode(parameter) {
  return axios({
    url: "/basic/resetPwdCode",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 * @name:登陆（form传值）
 * @msg:
 * @param {type}
 * @return:
 */
export function login(parameter) {
  return axios({
    url: "/con/user/login",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 * @name:注册（form传值）
 * @msg:
 * @param {type}
 * @return:
 */
export function register(parameter) {
  return axios({
    url: "/con/user/register",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 * @name:重置密码（form传值）
 * @msg:
 * @param {type}
 * @return:
 */
export function resetPwd(parameter) {
  return axios({
    url: "/con/user/resetPwd",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 * @name:设置昵称（form传值）
 * @msg:
 * @param {type}
 * @return:
 */
export function setNickname(parameter) {
  return axios({
    url: "/con/user/setNickname",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 * @name:认证中心-获取我的认证信息（form传值）
 * @msg:
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
/**
 * @name:提交认证-企业
 * @msg:
 * @param {type}
 * @return:
 */
export function submitAuthBus(parameter) {
  return axios({
    url: "/con/auth/submitAuthBus",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 * @name:提交认证-组织机构
 * @msg:
 * @param {type}
 * @return:
 */
export function submitAuthOrg(parameter) {
  return axios({
    url: "/con/auth/submitAuthOrg",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 * @name:提交认证-个人
 * @msg:
 * @param {type}
 * @return:
 */
export function submitAuthPer(parameter) {
  return axios({
    url: "/con/auth/submitAuthPer",
    method: "post",
    data: Qs.stringify(parameter)
  });
}

/**
 * @name:获取全部区域
 * @msg:
 * @param {type}
 * @return:
 */
export function getAreaTree(parameter) {
  return axios({
    url: "/basic/getAreaTree",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
