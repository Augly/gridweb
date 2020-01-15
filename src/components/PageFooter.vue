<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-31 08:55:28
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-14 17:48:32
 -->
<template>
  <div style="width:100%">
    <div class="footer">
      <div class="footer-content">
        <p class="footer-title">
          服务热线
        </p>
        <p class="footer-tell">400-888-8888</p>
        <p class="footer-dec">
          联系电话：1872265567
        </p>
        <p class="footer-dec">
          联系地址：天津滨海高新区华苑产业区海泰华科三路1号5号楼-1-802
        </p>
      </div>
    </div>
    <div class="footer-bar">
      Copyright © 2019 天津四立科技有限责任公司 备案号：津ICP备19004775号-1
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../assets/config.less";

.footer {
  width: 100%;
  min-width: 1900px;
  height: 154px;
  background-image: url("~@/assets/img/dibu@2x.png");
  background-size: 100% 100%;

  .footer-content {
    width: auto;
    .marl(902px);
    .padT(33px);

    .footer-title {
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }

    .footer-tell {
      font-size: 22px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      .lineH(36px);
    }

    .footer-dec {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
      .lineH(24px);
    }
  }
}
.footer-bar {
  width: 100%;
  height: 61px;
  background: rgba(43, 43, 43, 1);
  font-family: Source Han Sans CN;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  line-height: 61px;
  color: rgba(255, 255, 255, 0.4);
}
</style>
