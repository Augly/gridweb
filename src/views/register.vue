<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-03 17:12:36
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-06 17:21:06
 -->
<template>
  <div class="content-with--1200">
    <div class="content">
      <nav-head> </nav-head>
      <div class="password">
        <div>
          <h4 class="title">注册开放平台账户</h4>
          <el-form ref="form" :model="form" class="form">
            <el-form-item
              prop="phone"
              :rules="[
                {
                  required: true,
                  message: '请输入手机号',
                  trigger: 'blur'
                },
                {
                  validator: VerifyPhone,
                  trigger: ['blur', 'change']
                }
              ]"
            >
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
            <el-form-item
              prop="password"
              :rules="[
                {
                  required: true,
                  message: '请输入密码',
                  trigger: 'blur'
                },
                {
                  validator: VerifyPassword,
                  trigger: ['blur', 'change']
                }
              ]"
            >
              <el-input
                v-model="form.password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item
              prop="passwordAgin"
              :rules="[
                {
                  required: true,
                  message: '请输入密码',
                  trigger: 'blur'
                },
                {
                  validator: VerifyPassword,
                  trigger: ['blur', 'change']
                }
              ]"
            >
              <el-input
                v-model="form.passwordAgin"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="form.checked" /> 我已阅读并同意<el-link
                type="primary"
                @click.stop="agree"
                :underline="false"
              >
                《服务协议》
              </el-link>
            </el-form-item>
            <el-form-item>
              <el-col :span="24">
                <el-button type="primary" style="width:100%">确认</el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <el-dialog
      title="服务协议"
      :visible.sync="dialogVisible"
      width="30%"
      :show-close="false"
      center
    >
      <div class="agreeWrap">
        <p>
          服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sure" size="small">已阅读</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { NavHead } from "@/components";

import { VerifyPhone, VerifyPassword } from "@/utils/util.js";
export default {
  data() {
    return {
      VerifyPhone,
      VerifyPassword,
      dialogVisible: false,
      form: {
        passwordAgin: "",
        password: "",
        checked: false,
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
  methods: {
    agree() {
      this.dialogVisible = true;
    },
    sure() {
      this.dialogVisible = false;
      this.form.checked = true;
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
  .password {
    width: 100%;
    height: auto;
    .marT(80px);
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 30px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: rgba(0, 148, 255, 1);
      line-height: 49px;
      margin-bottom: 40px;
    }
    .form {
      width: 300px;
    }
  }
}
/deep/ .el-dialog {
  border-radius: 5px;
}
.agreeWrap {
  width: 100%;
  height: 400px;
}
</style>
