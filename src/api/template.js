/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2020-01-13 17:47:47
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-13 17:48:25
 */
import { axios } from "@/utils/request";
import Qs from "qs";

/**
 * @name:getTemplates
 * @msg:获取模板列表
 * @param {type}
 * @return:
 */
export function getTemplates(parameter) {
  return axios({
    url: "/platform/template/getTemplates",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
