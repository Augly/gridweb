<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-31 14:28:09
 * @LastEditors  : zero
 * @LastEditTime : 2019-12-31 15:20:45
 -->
<template>
  <div>
    <div class="content-head">
      {{ $route.meta.title }}
      <slot name="extra"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/config.less";
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
.right_button {
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -16px;
}
</style>
