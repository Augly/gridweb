<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-31 16:22:21
 * @LastEditors  : zero
 * @LastEditTime : 2019-12-31 16:25:36
 -->
<template>
  <div class="content-with--1200">
    <div class="content"><nav-head /></div>
  </div>
</template>
<script>
import { NavHead } from "@/components";
export default {
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
}
</style>
