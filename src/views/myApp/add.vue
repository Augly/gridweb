<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-31 16:22:21
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-06 15:21:48
 -->
<template>
  <div class="content-with--1200">
    <div class="content">
      <nav-head />
      <div class="from-wrap">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item
            label="对接系统"
            required
            prop="sys"
            :rules="[
              {
                required: true,
                message: '请选择对接系统',
                trigger: ['blur', 'change']
              }
            ]"
          >
            <el-select v-model="form.sys">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="选择区域"
            required
            prop="area"
            :rules="[
              {
                required: true,
                message: '请选择应用所属',
                trigger: ['blur', 'change']
              }
            ]"
          >
            <el-cascader
              :options="options"
              :props="props"
              v-model="form.area"
              clearable
            ></el-cascader>
          </el-form-item>
          <el-form-item label="应用所属" required>
            <el-radio-group v-model="form.belongs">
              <el-radio label="政府"></el-radio>
              <el-radio label="公司"></el-radio>
              <el-radio label="个人"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="应用类型"
            required
            prop="type"
            :rules="[
              {
                required: true,
                message: '请选择应用类型',
                trigger: ['blur', 'change']
              }
            ]"
          >
            <el-radio-group v-model="form.type">
              <el-radio label="WAP"></el-radio>
              <el-radio label="安卓应用"></el-radio>
              <el-radio label="IOS应用"></el-radio>
              <el-radio label="公众号"></el-radio>
              <el-radio label="小程序"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="应用名称"
            required
            prop="name"
            :rules="[
              {
                required: true,
                message: '请输入应用名称',
                trigger: ['blur', 'change']
              }
            ]"
          >
            <el-col :span="16">
              <el-input v-model="form.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="应用介绍">
            <el-col :span="16">
              <el-input
                type="textarea"
                v-model="form.desc"
                :autosize="false"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="应用logo">
            <el-col :span="6">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="form.logo" :src="form.logo" class="avatar" />
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
            prop="url"
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
              <el-input v-model="form.url"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="info">取消</el-button>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { VerifyUrl } from "@/utils/util.js";
import { NavHead } from "@/components";
export default {
  components: {
    NavHead
  },
  data() {
    return {
      VerifyUrl,
      props: { multiple: true },
      options: [
        {
          value: 1,
          label: "东南",
          children: [
            {
              value: 2,
              label: "上海",
              children: [
                { value: 3, label: "普陀" },
                { value: 4, label: "黄埔" },
                { value: 5, label: "徐汇" }
              ]
            },
            {
              value: 7,
              label: "江苏",
              children: [
                { value: 8, label: "南京" },
                { value: 9, label: "苏州" },
                { value: 10, label: "无锡" }
              ]
            },
            {
              value: 12,
              label: "浙江",
              children: [
                { value: 13, label: "杭州" },
                { value: 14, label: "宁波" },
                { value: 15, label: "嘉兴" }
              ]
            }
          ]
        },
        {
          value: 17,
          label: "西北",
          children: [
            {
              value: 18,
              label: "陕西",
              children: [
                { value: 19, label: "西安" },
                { value: 20, label: "延安" }
              ]
            },
            {
              value: 21,
              label: "新疆维吾尔族自治区",
              children: [
                { value: 22, label: "乌鲁木齐" },
                { value: 23, label: "克拉玛依" }
              ]
            }
          ]
        }
      ],
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
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
