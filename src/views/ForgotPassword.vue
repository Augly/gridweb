<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-02 19:19:15
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-15 15:54:32
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
                prop="account"
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
                  v-model="form.account"
                  placeholder="请输入手机号"
                ></el-input>
              </el-form-item>
              <el-form-item
                prop="phoneCode"
                :rules="[
                  {
                    required: true,
                    message: '请输入验证码',
                    trigger: ['blur', 'change']
                  }
                ]"
              >
                <el-col :span="14">
                  <el-input v-model="form.phoneCode" placeholder="请输入验证码">
                  </el-input>
                </el-col>
                <el-col :span="8" :offset="1">
                  <el-button
                    type="primary"
                    style="width:100%"
                    @click="getCode"
                    >{{ code }}</el-button
                  >
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
              <el-form-item>
                <el-col :span="24">
                  <el-button
                    type="primary"
                    style="width:100%"
                    @click="submitForm('form', toReset)"
                    >确认</el-button
                  >
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
import { resetPwd, resetPwdCode } from "@/api/user";
import { NavHead } from "@/components";
export default {
  data() {
    return {
      code: "获取验证码",
      VerifyPhone,
      VerifyPassword,
      form: {
        account: "",
        phoneCode: "",
        password: ""
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
    getCode() {
      if (this.code === "获取验证码") {
        this.$refs["form"].validateField("account", res => {
          if (!res) {
            resetPwdCode({
              phone: this.form.account
            })
              .then(result => {
                if (result) {
                  // console.log(result);
                  this.notice("success", "发送验证成功!");
                  this.code = 60;
                  const f = () => {
                    setTimeout(() => {
                      this.code--;
                      if (this.code > 0) {
                        f();
                      } else {
                        this.code = "获取验证码";
                      }
                    }, 1000);
                  };
                  f();
                }
              })
              .catch(() => {});
          }
        });
      }
    },
    toReset() {
      resetPwd({
        password: this.form.password,
        phoneCode: this.form.phoneCode,
        account: this.form.account
      })
        .then(result => {
          if (result) {
            this.notice("success", "修改密码成功!");
            this.$router.replace({
              path: "/index"
            });
          }
        })
        .catch(() => {});
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
    .form {
      width: 300px;
    }
  }
}
</style>
