<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-02 14:25:35
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-07 17:15:27
 -->
<template>
  <div>
    <p class="title">{{ myroute }}</p>
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
            <el-form-item>
              <el-col :span="11">
                <el-button type="info" style="width:100%">取消</el-button>
              </el-col>
              <el-col :span="11" :offset="2">
                <el-button type="primary" style="width:100%">确认</el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { VerifyPhone, VerifyPassword } from "@/utils/util.js";
import { resetPwd, resetPwdCode } from "@/api/user";
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
                  console.log(result);
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
.title {
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 36px;
}
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
</style>
