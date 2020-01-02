<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-02 19:19:15
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-02 19:21:53
 -->
<template>
  <div class="content-with--1200">
    <div class="content">
      <nav-head> </nav-head>
      <div class="password">
        <template>
          <div>
            <el-form ref="form" :model="form" class="form">
              <el-form-item>
                <el-input
                  v-model="form.phone"
                  placeholder="请输入手机号"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-col :span="14">
                  <el-input v-model="form.phone" placeholder="请输入验证码">
                  </el-input>
                </el-col>
                <el-col :span="9" :offset="1">
                  <el-button type="primary">获取验证码</el-button>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="form.phone"
                  placeholder="请输入密码"
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
            </el-form>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { NavHead } from "@/components";
export default {
  data() {
    return {
      form: {
        phone: ""
      }
    };
  },
  computed: {
    myroute: function() {
      return this.$route.meta.title;
    }
  },
  components: {
    NavHead
  },
  methods: {}
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
  .password {
    width: 100%;
    height: auto;
    .marT(80px);
    display: flex;
    align-items: center;
    justify-content: center;
    .form {
      width: 300px;
    }
  }
}
</style>
