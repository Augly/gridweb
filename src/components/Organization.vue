<template>
  <div>
    <p class="title">{{ myroute }}</p>
    <div class="from-wrap">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item
          label="单位名称"
          required
          prop="name"
          :rules="[
            {
              required: true,
              message: '请输入企业名称',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-col :span="20">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="组织类型" required>
          <el-col :span="20">
            <el-select v-model="form.sys" style="width:100%">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item
          label="详细地址"
          required
          prop="adder"
          :rules="[
            {
              required: true,
              message: '请输入详细地址',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-col :span="20">
            <el-input v-model="form.adder"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="联系人"
          required
          prop="linkName"
          :rules="[
            {
              required: true,
              message: '请输入联系人',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-col :span="20">
            <el-input v-model="form.linkName"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="联系电话"
          required
          prop="linkPhone"
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
          <el-col :span="20">
            <el-input v-model="form.linkPhone"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="联系邮箱"
          required
          prop="email"
          :rules="[
            {
              required: true,
              message: '请输入联系邮箱',
              trigger: 'blur'
            },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-col :span="20">
            <el-input v-model="form.email"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="组织机构代码"
          required
          prop="card"
          :rules="[
            {
              required: true,
              message: '请输入社会信用代码',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-col :span="20">
            <el-input v-model="form.card"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="组织机构证件">
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
        <el-form-item>
          <el-col :span="6" :offset="9"
            ><el-button
              type="primary"
              @click="onSubmit"
              style="width:100%;margin-top:40px;"
              >提交</el-button
            ></el-col
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { VerifyPhone } from "@/utils/util.js";
export default {
  data() {
    return {
      VerifyPhone,
      form: {
        name: "",
        type: "",
        adder: "",
        linkName: "",
        linkPhone: "",
        email: "",
        card: "",
        logo: ""
      }
    };
  },
  computed: {
    myroute: function() {
      return this.$route.meta.title;
    }
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
.title {
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 36px;
}
.from-wrap {
  box-sizing: border-box;
  min-width: 700px;
  width: 70%;
  .padL(150px);
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
    width: 180px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    text-align: center;
    color: rgba(204, 204, 204, 1);
    line-height: 26px;
  }
}
</style>
