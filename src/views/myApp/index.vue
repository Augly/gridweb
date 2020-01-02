<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-31 11:40:52
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-02 10:13:26
 -->
<template>
  <div class="content-with--1200">
    <div class="content">
      <nav-head>
        <template #extra>
          <el-button
            type="primary"
            size="small"
            class="right_button"
            @click="add"
            >创建应用</el-button
          >
        </template>
      </nav-head>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%;min-height:500px"
        size="medium"
      >
        <el-table-column
          prop="name"
          label="应用名称"
          align="center"
          header-align="center"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label="ID"
          align="center"
          header-align="center"
        >
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          align="center"
          header-align="center"
        >
        </el-table-column>
        <el-table-column
          prop="adder"
          label="所属地区"
          align="center"
          header-align="center"
        >
        </el-table-column>
        <el-table-column
          prop="sys"
          label="对接系统"
          align="center"
          header-align="center"
        >
        </el-table-column>
        <el-table-column
          prop="time"
          label="创建时间"
          align="center"
          header-align="center"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          align="center"
          header-align="center"
        >
        </el-table-column>
        <el-table-column label="操作" align="center" header-align="center">
          <template slot-scope="scope">
            <el-button type="text">{{ scope.index }}</el-button>
            <el-button type="text">文字按钮</el-button>
          </template>
        </el-table-column>
      </el-table>
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
</template>
<script>
import { NavHead } from "@/components";
export default {
  data() {
    return {
      pagesize: 5,
      tableData: [
        {
          id: "wg2344",
          name: "掌上行",
          type: "APP",
          adder: "天津市西青区",
          sys: "数字政通",
          time: "2019-09-16     11:14:18",
          status: "1"
        },
        {
          id: "wg2344",
          name: "掌上行",
          type: "APP",
          adder: "天津市西青区",
          sys: "数字政通",
          time: "2019-09-16     11:14:18",
          status: "1"
        },
        {
          id: "wg2344",
          name: "掌上行",
          type: "APP",
          adder: "天津市西青区",
          sys: "数字政通",
          time: "2019-09-16     11:14:18",
          status: "1"
        },
        {
          id: "wg2344",
          name: "掌上行",
          type: "APP",
          adder: "天津市西青区",
          sys: "数字政通",
          time: "2019-09-16     11:14:18",
          status: "1"
        },
        {
          id: "wg2344",
          name: "掌上行",
          type: "APP",
          adder: "天津市西青区",
          sys: "数字政通",
          time: "2019-09-16     11:14:18",
          status: "1"
        },
        {
          id: "wg2344",
          name: "掌上行",
          type: "APP",
          adder: "天津市西青区",
          sys: "数字政通",
          time: "2019-09-16     11:14:18",
          status: "1"
        },
        {
          id: "wg2344",
          name: "掌上行",
          type: "APP",
          adder: "天津市西青区",
          sys: "数字政通",
          time: "2019-09-16     11:14:18",
          status: "1"
        },
        {
          id: "wg2344",
          name: "掌上行",
          type: "APP",
          adder: "天津市西青区",
          sys: "数字政通",
          time: "2019-09-16     11:14:18",
          status: "1"
        },
        {
          id: "wg2344",
          name: "掌上行",
          type: "APP",
          adder: "天津市西青区",
          sys: "数字政通",
          time: "2019-09-16     11:14:18",
          status: "1"
        }
      ]
    };
  },
  components: {
    NavHead
  },
  methods: {
    add() {
      this.$router.push({
        path: "/myApp/add"
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
}
.pageGroup {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
