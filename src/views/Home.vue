<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-30 17:46:21
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-03 17:23:04
 -->
<template>
  <div class="full">
    <page-header></page-header>
    <div class="router">
      <router-view></router-view>
    </div>
    <page-footer></page-footer>
    <div class="mask">
      <el-dialog
        :show-close="false"
        :visible.sync="dialogVisible"
        width="500px"
      >
        <div class="register">
          <div class="wrap">
            <h3 class="title">欢迎登录</h3>
            <p class="tip">请使用您本人的账号密码登录</p>
            <el-form ref="form" :model="form" class="form">
              <el-form-item>
                <el-input
                  v-model="form.phone"
                  placeholder="请输入手机号"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="form.phone"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-col :span="24">
                  <el-button type="primary" style="width:100%">确认</el-button>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-col :span="12" style="text-align:left;">
                  <el-link type="primary" :underline="false"
                    >忘记密码？</el-link
                  >
                </el-col>
                <el-col :span="12" style="text-align:right;">
                  <el-link :underline="false">没有账号？去注册</el-link>
                </el-col>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { PageFooter, PageHeader } from "@/components/index";

export default {
  name: "home",
  components: {
    PageFooter,
    PageHeader
  },
  data() {
    return {
      dialogVisible: true,
      form: {
        sys: "",
        name: "",
        type: "",
        desc: "",
        url: "",
        logo: "",
        belongs: "",
        area: []
      }
    };
  },
  computed: {}
};
</script>
<style lang="less" scoped>
.full {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .router {
    position: relative;
    width: 100%;
    flex: auto;
    background-color: RGBA(244, 244, 244, 1);
  }
  .mask {
    /deep/ .el-dialog {
      background: transparent;
    }
    /deep/ .el-dialog__header {
      padding: 0;
    }
  }
}
.register {
  width: 500px;
  height: 540px;
  margin: -30px -20px;
  background: url("~@/assets/img/bg.png");
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrap {
    width: 335px;
    .title {
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(0, 148, 255, 1);
    }
    .tip {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      margin-top: 11px;
      margin-bottom: 50px;
    }
  }
}
</style>
