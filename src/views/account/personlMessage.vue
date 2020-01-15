<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-31 10:59:18
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-15 15:50:00
 -->
<template>
  <div>
    <p class="title">{{ myroute }}</p>
    <ul class="message-wrap">
      <li
        class="message-list"
        v-for="(item, index) in list"
        :key="index"
        @click="toRes(item)"
      >
        <p class="art_title online">{{ item.msgTitle }}</p>
        <span class="art-date">{{ item.createTime }}</span>
      </li>
    </ul>
    <div class="pageGroup" v-if="total !== 0">
      <el-pagination
        background
        :page-size="pageSize"
        :page-count="pageNum"
        layout="total,prev, pager, next"
        :total="total"
        @current-change="change"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { myMsgList } from "@/api/msg";
export default {
  data() {
    return {
      pageSize: 5,
      pageNum: 1,
      total: 0,
      list: []
    };
  },
  computed: {
    myroute: function() {
      return this.$route.meta.title;
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    change(val) {
      this.pageNum = val;
      this.getList();
    },
    getList() {
      myMsgList({
        pageNum: this.pageNum,
        pageSize: this.pageSize
      })
        .then(result => {
          if (result) {
            // console.log(result.data.list);
            this.total = result.data.total;
            this.pageSize = result.data.pageSize;
            this.pageNum = result.data.pageNum;
            this.list = result.data.list;
          }
        })
        .catch(() => {});
    },
    toRes(item) {
      this.$router.push({
        name: "newRes",
        params: {
          title: "站内信息",
          id: item.id
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
