<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-31 11:40:52
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-16 15:07:36
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
          prop="appName"
          label="应用名称"
          align="center"
          header-align="center"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label="id"
          align="center"
          header-align="center"
        >
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          align="center"
          header-align="center"
          ><template slot-scope="scope">
            {{
              scope.row.appType === 0
                ? "web网站"
                : scope.row.appType === 1
                ? "android 安卓移动端"
                : scope.row.appType === 2
                ? "ios 移动端"
                : scope.row.appType === 3
                ? "official 公众号"
                : "applet 小程序"
            }}
          </template>
        </el-table-column>
        <el-table-column
          prop="proName"
          label="对接系统"
          align="center"
          header-align="center"
        >
        </el-table-column>
        <el-table-column
          prop="createTime"
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
          ><template slot-scope="scope">
            {{
              scope.row.authStatus === 0
                ? " 未通过审核"
                : scope.row.authStatus === 1
                ? "通过审核"
                : "审核中"
            }}
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" header-align="center">
          <template slot-scope="scope">
            <el-button @click="handleEditClick(scope.row)" type="text"
              >编辑</el-button
            >
            <el-button
              @click="handleClick(scope.row)"
              type="text"
              v-if="scope.row.authStatus === 1"
              >设置模板</el-button
            >
          </template>
        </el-table-column>
      </el-table>
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
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { NavHead } from "@/components";
import { myAppList } from "@/api/app";
import { getMyAuthInfo } from "@/api/auth";
export default {
  data() {
    return {
      pageSize: 10,
      pageNum: 1,
      total: 0,
      tableData: []
    };
  },
  components: {
    NavHead
  },
  mounted() {
    getMyAuthInfo()
      .then(result => {
        if (result) {
          let s = this.$ls.get("userInfo");
          s.authStatus = result.data.authStatus;
          this.$ls.set("userInfo", s);
          this.setInfo(result.data);
          if (result.data.authStatus !== 2) {
            this.$router.replace({
              path: "/myApp/Unauthorized"
            });
          } else {
            this.getList();
          }
        }
      })
      .catch(() => {});
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      info: state => state.info
    })
  },
  methods: {
    ...mapActions(["setInfo"]),
    change(val) {
      this.pageNum = val;
      this.getList();
    },
    getList: function() {
      myAppList({
        pageNum: this.pageNum,
        pageSize: this.pageSize
      })
        .then(result => {
          this.total = result.data.total;
          this.pageSize = result.data.pageSize;
          this.pageNum = result.data.pageNum;
          this.tableData = result.data.list;
        })
        .catch(() => {});
    },
    handleClick(item) {
      this.$router.push({
        path: "/myApp/template",
        query: {
          providerId: item.proId
        }
      });
    },
    handleEditClick(item) {
      // console.log(item);
      this.$router.push({
        name: "/myApp/add",
        params: {
          title: "编辑应用",
          appId: item.id
        }
      });
    },
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
