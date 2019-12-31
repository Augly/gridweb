<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-31 11:40:10
 * @LastEditors  : zero
 * @LastEditTime : 2019-12-31 14:25:37
 -->
<template>
  <div class="block-center--1200">
    <div class="wrap">
      <div class="silde">
        <ul class="ul">
          <li>
            <div class="ul_title">
              <i class="el-icon-tickets"></i>
              <span>平台政策与指引</span>
            </div>
            <div class="ul_list ul_list_active">移动应用介绍</div>
          </li>
        </ul>
      </div>
      <div class="main">
        <p class="title">概述</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import "~@/assets/config.less";
.wrap {
  width: 100%;
  height: auto;
  margin: 10px 0px 20px 0px;
  display: flex;
  justify-content: space-between;
  .silde {
    width: 205px;
    min-height: 870px;
    box-sizing: border-box;
    padding-left: 15px;
    .bc(rgba(255, 255, 255, 1));
    .ul {
      width: 100%;
      height: auto;
      li {
        width: 100%;
        height: auto;
        .ul_title {
          width: 100%;
          height: 60px;
          font-size: 18px;
          .lineH(60px);
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          border-bottom: 1px solid rgba(240, 240, 240, 1);
          span {
            margin-left: 10px;
          }
        }
        .ul_list {
          width: 100%;
          height: 36px;
          box-sizing: border-box;
          padding-left: 30px;
          padding-right: 17px;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 36px;
          cursor: pointer;
        }
        .ul_list_active {
          color: rgba(0, 148, 255, 1);
          position: relative;
          &::after {
            position: absolute;
            content: "";
            width: 6px;
            height: 10px;
            top: 50%;
            margin-top: -5px;
            right: 17px;
            background-image: url("~@/assets/img/jt.png");
            background-size: 100% 100%;
          }
        }
      }
    }
  }
  .main {
    width: 985px;
    height: auto;
    .bc(rgba(255, 255, 255, 1));
    box-sizing: border-box;
    padding: 25px 45px;
    .title {
      font-size: 22px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 36px;
    }
  }
}
</style>
