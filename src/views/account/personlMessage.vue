<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-31 10:59:18
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-03 10:36:15
 -->
<template>
  <div>
    <p class="title">{{ myroute }}</p>
    <ul class="message-wrap">
      <li class="message-list" @click="toRes">
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
</template>
<script>
export default {
  data() {
    return {
      pagesize: 5
    };
  },
  computed: {
    myroute: function() {
      return this.$route.meta.title;
    }
  },
  methods: {
    toRes() {
      this.$router.push({
        path: "/new/newRes",
        params: {
          title: "站内信息"
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 36px;
}
.message-wrap {
  width: calc(100%+90px);
  min-height: 600px;
  height: auto;
  margin: 0px -45px;
  margin-top: 40px;
  .message-list {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 0px 45px;
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
    cursor: pointer;
    border-bottom: 1px solid rgba(236, 235, 235, 1);
  }
}
.pageGroup {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
