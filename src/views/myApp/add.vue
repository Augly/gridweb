<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-31 16:22:21
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-09 14:47:52
 -->
<template>
  <div class="content-with--1200">
    <div class="content">
      <nav-head :title="$route.params.title" />
      <div class="from-wrap">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item
            label="对接系统"
            required
            prop="proId"
            :rules="[
              {
                required: true,
                message: '请选择对接系统',
                trigger: ['blur', 'change']
              }
            ]"
          >
            <el-select v-model="form.proId">
              <el-option
                v-for="item in proList"
                :label="item.sysName"
                :value="item.id"
                :key="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="应用所属" required>
            <el-radio-group v-model="form.ownerType">
              <el-radio
                v-for="item in ownerTypeList"
                :value="item.value"
                :key="item.value"
                :label="item.value"
                >{{ item.label }}</el-radio
              >
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="应用类型"
            required
            prop="appType"
            :rules="[
              {
                required: true,
                message: '请选择应用类型',
                trigger: ['blur', 'change']
              }
            ]"
          >
            <el-radio-group v-model="form.appType">
              <el-radio
                v-for="item in appType"
                :value="item.value"
                :key="item.value"
                :label="item.value"
                >{{ item.label }}</el-radio
              >
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="应用名称"
            required
            prop="appName"
            :rules="[
              {
                required: true,
                message: '请输入应用名称',
                trigger: ['blur', 'change']
              }
            ]"
          >
            <el-col :span="16">
              <el-input v-model="form.appName"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="应用介绍">
            <el-col :span="16">
              <el-input
                type="textarea"
                v-model="form.appIntro"
                :autosize="false"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="应用logo">
            <el-col :span="6">
              <el-upload
                class="avatar-uploader"
                :action="'/api' + singleUploadImg"
                :show-file-list="false"
                :on-success="e => handleAvatarSuccess(e, 'appLogo', success)"
                :before-upload="beforeAvatarUpload"
              >
                <el-image
                  v-if="form.appLogo"
                  :src="form.appLogo"
                  fit="contain"
                  class="avatar"
                />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-col>
            <el-col :span="12">
              <div class="tip">
                只能上传小于5M的JPG、 PNG、BMP格式图片
              </div>
            </el-col>
          </el-form-item>
          <el-form-item
            label="回调地址"
            required
            prop="callBackUrl"
            :rules="[
              {
                required: true,
                message: '请输入回调地址',
                trigger: ['blur', 'change']
              },
              {
                validator: VerifyUrl,
                trigger: ['blur', 'change']
              }
            ]"
          >
            <el-col :span="16">
              <el-input v-model="form.callBackUrl"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="info" @click="cendel">取消</el-button>
            <el-button type="primary" @click="submitForm('form', onSubmit)"
              >提交</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { VerifyUrl } from "@/utils/util.js";
import { NavHead } from "@/components";
import { singleUploadImg } from "@/api/basic.js";
import {
  getAuthInfo,
  createApp,
  updateApp,
  chooseProvider
} from "@/api/app.js";
export default {
  components: {
    NavHead
  },
  data() {
    return {
      VerifyUrl,
      singleUploadImg,
      props: { value: "areaName", label: "areaName" },
      options: this.$ls.get("cityList") || [],
      appType: [
        {
          label: "WAP",
          value: 0
        },
        {
          label: "安卓应用",
          value: 1
        },
        {
          label: "IOS应用",
          value: 2
        },
        {
          label: "公众号",
          value: 3
        },
        {
          label: "小程序",
          value: 4
        }
      ],
      ownerTypeList: [
        {
          label: "政府",
          value: 0
        },
        {
          label: "公司",
          value: 1
        },
        {
          label: "个人",
          value: 2
        }
      ],
      proList: [],
      form: {
        proId: "",
        proName: "",
        ownerType: 0,
        id: "",
        callBackUrl: "",
        appType: 0,
        appName: "",
        appLogo: "",
        appIntro: ""
      }
    };
  },
  mounted() {
    chooseProvider()
      .then(result => {
        if (result) {
          this.proList = result.data;
          this.form.proId = result.data[0].id;
          this.form.proName = result.data[0].sysName;
        }
      })
      .catch(() => {});
    console.log(this.$route);
    if (this.$route.params.title) {
      getAuthInfo({
        appId: this.$route.params.appId
      })
        .then(result => {
          if (result) {
            this.form = Object.assign(this.form, result.data);
          }
        })
        .catch(() => {});
    }
  },
  computed: {},
  methods: {
    success(type, res) {
      this.form[type] = res;
    },
    cendel() {
      this.$router.replace({
        path: "/myApp/index"
      });
    },
    onSubmit() {
      for (var i = 0; i < this.proList.length; i++) {
        if (this.form.proId === this.proList[i].id) {
          this.form.proName = this.proList[i].sysName;
        }
      }
      if (this.$route.params.title) {
        updateApp(this.form)
          .then(result => {
            if (result) {
              this.notice("success", "修改应用成功!");
              this.$router.back(-1);
            }
          })
          .catch(() => {});
      } else {
        createApp(this.form)
          .then(result => {
            if (result) {
              this.notice("success", "创建应用成功!");
              this.$router.back(-1);
            }
          })
          .catch(() => {});
      }
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
  .from-wrap {
    box-sizing: border-box;
    min-width: 700px;
    width: 50%;
    .padL(100px);
    .padT(50px);
    .padB(150px);
    /deep/ .avatar-uploader {
      width: 106px;
      height: 106px;
    }
    /deep/ .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    /deep/ .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    /deep/ .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 106px;
      height: 106px;
      line-height: 106px;
      text-align: center;
    }
    /deep/ .avatar {
      width: 106px;
      height: 106px;
      display: block;
    }
    .line {
      text-align: center;
    }
    .tip {
      width: 160px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(204, 204, 204, 1);
      line-height: 26px;
    }
  }
}
</style>
