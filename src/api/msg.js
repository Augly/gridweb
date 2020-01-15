/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2020-01-13 17:49:10
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-13 17:50:03
 */
import { axios } from "@/utils/request";
import Qs from "qs";

/**
 * @name:msgInfo
 * @msg:站内消息详情
 * @param {type}
 * @return:
 */
export function msgInfo(parameter) {
  return axios({
    url: "/platform/msg/msgInfo",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
/**
 * @name:myMsgList
 * @msg:站内消息列表
 * @param {type}
 * @return:
 */
export function myMsgList(parameter) {
  return axios({
    url: "/platform/msg/myMsgList",
    method: "post",
    data: Qs.stringify(parameter)
  });
}
