<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-03 17:12:36
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-15 15:47:25
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
              <el-col :span="15">
                <el-input v-model="form.phoneCode" placeholder="请输入验证码">
                </el-input>
              </el-col>
              <el-col :span="8" :offset="1">
                <el-button type="primary" style="width:100%" @click="getCode">{{
                  code
                }}</el-button>
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
                placeholder="请再次输入密码"
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
                <el-button
                  type="primary"
                  style="width:100%"
                  @click="submitForm('form', toRegister)"
                  >确认</el-button
                >
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
import { register, registerCode } from "@/api/user";
import { VerifyPhone, VerifyPassword } from "@/utils/util.js";
export default {
  data() {
    return {
      code: "获取验证码",
      VerifyPhone,
      VerifyPassword,
      dialogVisible: false,
      form: {
        passwordAgin: "",
        password: "",
        phoneCode: "",
        checked: false,
        account: ""
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
            registerCode({
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
    toRegister() {
      if (!this.form.checked) {
        this.notice("warning", "请确认已阅读服务协议!");
        return false;
      }
      if (this.form.password !== this.form.passwordAgin) {
        this.notice("warning", "两次密码不一致!");
        return false;
      }
      register({
        password: this.form.password,
        phoneCode: this.form.phoneCode,
        account: this.form.account
      })
        .then(result => {
          if (result) {
            this.notice("success", "注册成功!");
            this.$router.replace({
              path: "/index"
            });
          }
        })
        .catch(() => {
          this.notice("error", "注册成功!");
        });
    },
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
