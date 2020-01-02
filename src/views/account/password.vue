<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-02 14:25:35
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-02 16:09:30
 -->
<template>
  <div>
    <p class="title">{{ myroute }}</p>
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
