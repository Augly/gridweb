<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-31 10:01:54
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-15 15:13:59
 -->
<template>
  <div class="content-with--1200">
    <div class="content">
      <nav-head> </nav-head>
      <ul class="content-listWrap">
        <li>
          <img src="@/assets/img/tianjinheping.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/shuzi.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/binhai.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/tinajin.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/haidian.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/chaoyang.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/tongzhou.png" alt="" />
        </li>
        <li>
          <img src="@/assets/img/shunyi.png" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { NavHead } from "@/components";
export default {
  data() {
    return {};
  },
  components: {
    NavHead
  }
};
</script>

<style lang="less" scoped>
@import "../assets/config.less";

.content {
  width: 100%;
  min-height: 656px;
  .marB(40px);
  .bc(rgba(255, 255, 255, 1));
  .marT(10px);
  .content-head {
    .wh(100%, 80px);
    position: relative;
    border-bottom: 1px solid rgba(237, 237, 237, 1);
    font-size: 22px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    text-indent: 42px;
    line-height: 80px;
    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -9px;
      content: "";
      .wh(10px, 19px);
      .bc(rgba(0, 148, 255, 1));
    }
  }
  .content-listWrap {
    width: 895px;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    .padT(20px);
    li {
      width: 283px;
      height: 118px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(238, 238, 238, 1);
      border-radius: 2px;
      .floatL();
      .marT(25px);
      .marl(20px);
    }
    li:nth-child(3n + 1) {
      .marl(0px);
    }
  }
}
</style>
