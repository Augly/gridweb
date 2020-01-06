<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-02 19:19:15
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-06 17:18:47
 -->
<template>
  <div class="content-with--1200">
    <div class="content">
      <nav-head> </nav-head>
      <div class="password">
        <template>
          <div>
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
import { VerifyPhone, VerifyPassword } from "@/utils/util.js";
import { NavHead } from "@/components";
export default {
  data() {
    return {
      VerifyPhone,
      VerifyPassword,
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
