<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-02 18:34:53
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-02 19:04:59
 -->
<template>
  <div class="content-with--1200">
    <div class="content">
      <nav-head />
      <div class="new-main">
        <div class="new-head">
          <div class="new-item">
            <img src="" alt="" />
            <div class="new-item-tip online">2121</div>
          </div>
          <div class="new-item">
            <img src="" alt="" />
            <div class="new-item-tip online">2121</div>
          </div>
          <div class="new-item">
            <img src="" alt="" />
            <div class="new-item-tip online">2121</div>
          </div>
          <div class="new-item">
            <img src="" alt="" />
            <div class="new-item-tip online">2121</div>
          </div>
        </div>
        <div class="new-content">
          <div class="table-head">
            <span>主题</span>
            <span class="title-time">时间</span>
          </div>
          <ul class="message-wrap">
            <li class="message-list">
              <p class="art_title online">网格化开放平台收费公告补充说明</p>
              <span class="art-date">2019-09-16 11:14:18</span>
            </li>
          </ul>
          <div class="pageGroup">
            <el-pagination
              background
              :page-size="pagesize"
              layout="total,prev, pager, next"
              :total="1000"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { NavHead } from "@/components";
export default {
  data() {
    return { pagesize: 5 };
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
    .new-head {
      width: 100%;
      height: 261px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(238, 238, 238, 1);
      padding: 20px 30px;
      .new-item {
        .wh(270px, 220px);
        // .bc(rgba(0, 0, 0, 1));
        .floatL();
        margin-left: 14px;
        position: relative;
        img {
          width: 100% 100%;
        }
        .new-item-tip {
          position: absolute;
          width: 100%;
          height: 50px;
          background: rgba(0, 0, 0, 0.6);
          bottom: 0;
          left: 0;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(254, 254, 254, 1);
          line-height: 50px;
          box-sizing: border-box;
          padding: 0px 20px;
        }
      }
      .new-item::nth-child(4n + 1) {
        margin-left: 0;
      }
    }
    .new-content {
      width: 100%;
      box-sizing: border-box;
      .table-head {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        padding: 0px 40px;
        background: rgba(187, 187, 187, 0.1);
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title-time {
          width: 200px;
        }
      }
      .message-wrap {
        width: 100%;
        min-height: 600px;
        height: auto;
        .message-list {
          width: 100%;
          height: 60px;
          box-sizing: border-box;
          padding: 0px 95px 0px 45px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 15px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          .art_title {
            width: 70%;
          }
          border-bottom: 1px solid rgba(236, 235, 235, 1);
        }
      }
      .pageGroup {
        width: 100%;
        height: 60px;
        display: flex;
        box-sizing: border-box;
        padding: 0px 45px;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
}
</style>
