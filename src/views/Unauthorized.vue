<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-02 19:08:38
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-07 17:30:34
 -->
<template>
  <div class="content-with--1200">
    <div class="content">
      <nav-head> </nav-head>
      <div class="main">
        <img src="~@/assets/img/renzheng-icon.png" alt="" class="logo" />
        <p class="tip">
          系统检测到您的账户信息未完成认证，请先完成账户认证后可新建应用，点击前往认证——认证中心
        </p>
        <el-button
          type="primary"
          size="small"
          style="margin-top:47px;"
          @click="toCenter"
          >去认证</el-button
        >
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
  },
  methods: {
    toCenter() {
      this.$router.replace({
        path: "/account/Certification"
      });
    }
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
  .main {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .logo {
      .wh(158px, 95px);
    }
    .tip {
      width: 419px;
      font-size: 15px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 28px;
      text-align: center;
      display: block;
      margin-top: 30px;
    }
  }
}
</style>
