/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2020-01-07 21:12:44
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-07 21:14:30
 */
import { axios } from "@/utils/request";
import Qs from "qs";

/**
 * @name:newsList
 * @msg:查询新闻列表
 * @param {type}
 * @return:
 */
export function newsList(parameter) {
  return axios({
    url: "/cms/news/newsList",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 * @name:getNewsInfo
 * @msg:获取新闻详情
 * @param {type}
 * @return:
 */
export function getNewsInfo(parameter) {
  return axios({
    url: "/cms/news/getNewsInfo",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
