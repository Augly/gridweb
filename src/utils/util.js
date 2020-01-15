/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2020-01-06 11:23:40
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-08 11:41:12
 */
export let api = "http://39.106.47.11:8080/platform";
export function VerifyPhone(rule, value, callback) {
  let regExp = /^1[3456789]\d{9}$/;
  if (regExp.test(value) === false) {
    callback(new Error("请输入正确的手机号"));
  } else {
    callback();
  }
}
export function VerifyPassword(rule, value, callback) {
  let regExp = /^[A-Za-z0-9]{6,12}$/;
  if (regExp.test(value) === false) {
    callback(new Error("请输入6到12位的数字和字母组合"));
  } else {
    callback();
  }
}
export function VerifyArae(rule, value, callback) {
  // console.log(value);

  if (value.length === 0) {
    callback(new Error("请选择地区"));
  } else {
    callback();
  }
}
export function VerifyIdCard(rule, value, callback) {
  let checkProv = function(val) {
    var pattern = /^[1-9][0-9]/;
    var provs = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江 ",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北 ",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏 ",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门"
    };
    if (pattern.test(val)) {
      if (provs[val]) {
        return true;
      }
    }
    return false;
  };

  let checkDate = function(val) {
    var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
    if (pattern.test(val)) {
      var year = val.substring(0, 4);
      var month = val.substring(4, 6);
      var date = val.substring(6, 8);
      var date2 = new Date(year + "-" + month + "-" + date);
      if (date2 && date2.getMonth() == parseInt(month) - 1) {
        return true;
      }
    }
    return false;
  };
  let checkCode = function(val) {
    var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
    var code = val.substring(17);
    if (p.test(val)) {
      var sum = 0;
      for (var i = 0; i < 17; i++) {
        sum += val[i] * factor[i];
      }
      if (parity[sum % 11] == code.toUpperCase()) {
        return true;
      }
    }
    return false;
  };
  let regExp = function(val) {
    if (checkCode(val)) {
      var date = val.substring(6, 14);
      if (checkDate(date)) {
        if (checkProv(val.substring(0, 2))) {
          return true;
        }
      }
    }
    return false;
  };
  if (regExp(value) === false) {
    callback(new Error("请输入正确的身份证号码"));
  } else {
    callback();
  }
}
export function VerifyUrl(rule, value, callback) {
  let regExp = /^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/;
  if (regExp.test(value) === false) {
    callback(new Error("请输入正确的Url地址"));
  } else {
    callback();
  }
}
/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent() {
  const event = document.createEvent("HTMLEvents");
  event.initEvent("resize", true, true);
  event.eventType = "message";
  window.dispatchEvent(event);
}
/**
 * @name: getAdder
 * @msg: 最少次数递归获取地址名称组合
 * @param {type}
 * @return:
 */
export function getAdder(params, list, type) {
  const namestr = [];
  let n = 0;
  function findAdder(params, list) {
    for (let t = 0; t < list.length; t++) {
      if (list[t].value === params[n]) {
        namestr.push(list[t].label);
        if (list[t].children) {
          n++;
          findAdder(params, list[t].children);
        }
        break;
      }
    }
    return namestr.join(type);
  }
  return findAdder(params, list);
}
/**
 * 时间转换
 */
export function timeForm(time) {
  var date = new Date(time);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var btTimeStr;
  var str = "";
  var week = date.getDay();
  if (week === 0) {
    str = "周日";
  } else if (week === 1) {
    str = "周一";
  } else if (week === 2) {
    str = "周二";
  } else if (week === 3) {
    str = "周三";
  } else if (week === 4) {
    str = "周四";
  } else if (week === 5) {
    str = "周五";
  } else if (week === 6) {
    str = "周六";
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  btTimeStr = year + "-" + month + "-" + day;
  return {
    chatTime: {
      year: year,
      month: month,
      day: day,
      hour: hour,
      minute: minute,
      week: str,
      second: second
    },
    time:
      year +
      "年" +
      month +
      "月" +
      day +
      "日" +
      hour +
      "时" +
      minute +
      "分" +
      second +
      "秒",
    btTime: btTimeStr
  };
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate(id = "", timeout = 1500) {
  if (id === "") {
    return;
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id));
  }, timeout);
}
