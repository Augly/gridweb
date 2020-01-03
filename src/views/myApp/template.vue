<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-03 14:08:06
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-03 16:18:07
 -->
<template>
  <div class="content-with--1200">
    <div class="content">
      <nav-head :title="$route.query.title" />
      <ul class="main-ui">
        <li class="main-list">
          <div class="list-main">
            <el-image
              ref="listImg"
              :src="url"
              fit="contain"
              alt=""
              srcset=""
              :preview-src-list="srcList"
              style="width: 100%;height: 290px;"
            />
            <p>模版名称</p>
          </div>
          <div class="list-footer">
            <el-button type="primary" style="width:40%;" @click="look"
              >预览</el-button
            >
            <el-button type="primary" style="width:40%;">下载资源</el-button>
          </div>
        </li>
        <li class="main-list">
          <div class="list-main">
            <el-image
              :src="url"
              fit="contain"
              alt=""
              srcset=""
              style="width: 100%;height: 290px;"
            ></el-image>
            <p>模版名称</p>
          </div>
          <div class="list-footer">
            <el-button type="primary" style="width:40%;">预览</el-button>
            <el-button type="primary" style="width:40%;">下载资源</el-button>
          </div>
        </li>
        <li class="main-list">
          <div class="list-main">
            <el-image
              :src="url"
              fit="contain"
              alt=""
              srcset=""
              style="width: 100%;height: 290px;"
            />
            <p>模版名称</p>
          </div>
          <div class="list-footer">
            <el-button type="primary" style="width:40%;">预览</el-button>
            <el-button type="primary" style="width:40%;">下载资源</el-button>
          </div>
        </li>
        <li class="main-list">
          <div class="list-main">
            <el-image
              :src="url"
              fit="contain"
              alt=""
              srcset=""
              style="width: 100%;height: 290px;"
            />
            <p>模版名称</p>
          </div>
          <div class="list-footer">
            <el-button type="primary" style="width:40%;">预览</el-button>
            <el-button type="primary" style="width:40%;">下载资源</el-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { NavHead } from "@/components";
export default {
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
      ]
    };
  },
  components: {
    NavHead
  },
  methods: {
    look() {
      console.log((this.$refs["listImg"].showViewer = true));
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
  .main-ui {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0px 120px 40px 120px;
    overflow: hidden;
    .main-list {
      width: 274px;
      height: auto;
      background: rgba(255, 255, 255, 1);
      .floatL();
      .marl(30px);
      .marT(30px);
      .list-main {
        width: 100%;
        height: 348px;
        border: 1px solid rgba(238, 238, 238, 1);
        box-sizing: border-box;
        padding: 7px;
        img {
          width: 100%;
          height: 290px;
        }
        p {
          font-size: 18px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 40px;
          text-align: center;
        }
      }
      .list-footer {
        width: 100%;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
