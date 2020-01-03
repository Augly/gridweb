<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-02 18:34:59
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-03 10:35:55
 -->
<template>
  <div class="content-with--1200">
    <div class="content">
      <nav-head :title="$route.query.title" />
      <div class="new-main">
        <div class="new-head">
          <h4 class="title">网格化平台升级通知</h4>
          <p class="source">
            <span>来源：网格平台</span>
            <span>时间：2019年08月08日 13:50:21</span>
          </p>
        </div>
        <div class="new-content"></div>
      </div>
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
@import "~@/assets/config.less";
.content {
  width: 100%;
  min-height: 656px;
  .marB(40px);
  .bc(rgba(255, 255, 255, 1));
  .marT(10px);
  .new-main {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0px 40px;
    .new-head {
      width: 100%;
      height: 115px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(238, 238, 238, 1);
      padding: 25px 0px 17px;
      .title {
        font-size: 28px;
        font-family: Source Han Sans CN;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
        line-height: 41px;
      }
      .source {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 26px;
        margin-top: 12px;
      }
    }
    .new-content {
      width: 100%;
      box-sizing: border-box;
      padding: 20px 0px;
    }
  }
}
</style>
