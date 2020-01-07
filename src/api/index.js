/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2020-01-07 21:49:26
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-07 21:50:07
 */
import { axios } from "@/utils/request";
import Qs from "qs";
/**
 *
 *
 * @name:首页banner列表（form传值）
 * @msg:
 * @param {any} parameter
 * @returns
 */
export function bannerList(parameter) {
  return axios({
    url: "/cms/banner/bannerList",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
