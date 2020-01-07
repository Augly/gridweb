/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2020-01-07 18:07:39
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-07 21:08:37
 */
import { axios } from "@/utils/request";
import Qs from "qs";
/**
 *
 *
 * @name:帮助中心分类列表（form传值）
 * @msg:
 * @param {any} parameter
 * @returns
 */
export function guideTypes(parameter) {
  return axios({
    url: "/cms/guide/guideTypes",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 *
 *
 * @name:根据分类获取帮助中心列表
 * @msg:
 * @param {any} parameter
 * @returns
 */
export function getGuidesByType(parameter) {
  return axios({
    url: "/cms/guide/getGuidesByType",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
