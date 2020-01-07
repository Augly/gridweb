<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-02 18:34:59
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-07 21:44:02
 -->
<template>
  <div class="content-with--1200">
    <div class="content" v-if="info">
      <nav-head :title="$route.query.title" />
      <div class="new-main">
        <div class="new-head">
          <h4 class="title">{{ info.title }}</h4>
          <p class="source">
            <span>来源：{{ info.author }}</span>
            <span>时间：{{ info.createTime }}</span>
          </p>
        </div>
        <div class="new-content">
          {{ info.content }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getNewsInfo } from "@/api/new.js";
import { NavHead } from "@/components";
export default {
  data() {
    return {
      info: null
    };
  },
  components: {
    NavHead
  },
  mounted() {
    getNewsInfo({
      newsId: this.$route.query.id
    })
      .then(result => {
        if (result) {
          this.info = result.data;
        }
      })
      .catch(() => {});
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
        span {
          margin-right: 20px;
        }
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
