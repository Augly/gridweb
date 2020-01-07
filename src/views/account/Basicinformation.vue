<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-02 14:26:12
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-07 18:02:27
 -->
<template>
  <div>
    <p class="title">{{ myroute }}</p>
    <div class="from-wrap">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item
          label="姓名"
          required
          prop="nickname"
          :rules="[
            {
              required: true,
              message: '请输入姓名',
              trigger: 'blur'
            },
            {
              message: '请输入姓名',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-col :span="20">
            <el-input
              v-model="form.nickname"
              placeholder="请输入姓名"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="联系电话" required>
          <el-col :span="20">
            17633369350
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-col :span="6" :offset="9"
            ><el-button
              type="primary"
              @click="submitForm('form', onSubmit)"
              style="width:100%;margin-top:40px;"
              >保存</el-button
            ></el-col
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { USER_INFO } from "@/store/config.js";
import { setNickname } from "@/api/user.js";
export default {
  data() {
    return {
      form: {
        nickname: ""
      }
    };
  },
  mounted() {
    if (this.userInfo) {
      this.form.nickname = this.userInfo.nickname;
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    }),
    myroute: function() {
      return this.$route.meta.title;
    }
  },
  methods: {
    ...mapActions(["setUserInfo"]),
    onSubmit() {
      setNickname(this.form)
        .then(result => {
          if (result) {
            let userInfo = this.$ls.get(USER_INFO);
            userInfo.nickname = this.form.nickname;
            this.$ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000);
            this.setUserInfo(userInfo);
            this.notice("success", "保存个人信息成功!");
          }
        })
        .catch(() => {});
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$notify.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$notify.error("上传头像图片大小不能超过 2MB!");
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
</style>
