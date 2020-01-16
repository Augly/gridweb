<template>
  <div>
    <p class="title">{{ myroute }}</p>
    <div class="from-wrap">
      <el-form
        ref="form"
        :model="form"
        label-width="120px"
        :disabled="info && info.authStatus === 2 ? true : false"
      >
        <el-form-item
          label="企业名称"
          required
          prop="subjectName"
          :rules="[
            {
              required: true,
              message: '请输入企业名称',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-col :span="20">
            <el-input v-model="form.subjectName"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="所在地区"
          required
          prop="area"
          :rules="[
            {
              required: true,
              message: '请选择所在地区',
              trigger: 'blur'
            },
            {
              validator: VerifyArae,
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-col :span="20">
            <el-cascader
              style="width:100%"
              :options="options"
              :props="props"
              v-model="form.area"
            ></el-cascader>
          </el-col>
        </el-form-item>
        <el-form-item
          label="通讯地址"
          required
          prop="addressDetails"
          :rules="[
            {
              required: true,
              message: '请输入通信地址',
              trigger: ['change', 'blur']
            }
          ]"
        >
          <el-col :span="20">
            <el-input
              v-model="form.addressDetails"
              placeholder="请输入通信地址"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="联系人"
          required
          prop="linkMan"
          :rules="[
            {
              required: true,
              message: '请输入联系人',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-col :span="20">
            <el-input v-model="form.linkMan"></el-input>
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
          label="社会信用代码"
          required
          prop="busCode"
          :rules="[
            {
              required: true,
              message: '请输入社会信用代码',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-col :span="20">
            <el-input v-model="form.busCode"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="营业执照">
          <el-col :span="6">
            <el-upload
              class="avatar-uploader"
              :action="'/api' + singleUploadImg"
              :show-file-list="false"
              :on-success="e => handleAvatarSuccess(e, 'busLicense', success)"
              :before-upload="beforeAvatarUpload"
            >
              <el-image
                v-if="form.busLicense"
                :src="form.busLicense"
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
        <el-form-item v-if="!(info && info.authStatus === 2)">
          <el-col :span="6" :offset="9"
            ><el-button
              type="primary"
              @click="submitForm('form', onSubmit)"
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
import { VerifyPhone, VerifyIdCard, VerifyArae } from "@/utils/util.js";
import { mapState } from "vuex";
import { submitAuthBus } from "@/api/auth";
import { singleUploadImg } from "@/api/basic.js";
export default {
  data() {
    return {
      VerifyArae,
      VerifyPhone,
      VerifyIdCard,
      singleUploadImg,
      props: { value: "areaName", label: "areaName" },
      options: this.$ls.get("cityList") || [],
      form: {
        subjectName: "",
        linkPhone: "",
        linkMan: "",
        userId: this.$ls.get("userInfo").id,
        email: "",
        busLicense: "",
        busCode: "",
        addressDetails: "",
        addressProvince: "",
        addressCity: "",
        addressRegion: "",
        area: []
      }
    };
  },
  computed: {
    ...mapState({
      info: state => state.info
    }),
    myroute: function() {
      return this.$route.meta.title;
    }
  },
  mounted() {
    if (this.info && this.info.authStatus === 2) {
      this.form = Object.assign(this.form, this.info.authBus);
      this.form.area = [
        this.info.authBase.addressProvince,
        this.info.authBase.addressCity,
        this.info.authBase.addressRegion
      ];
      this.form.subjectName = this.info.authBase.subjectName;
      this.form.email = this.info.authBase.email;
      this.form.addressDetails = this.info.authBase.addressDetails;
    }
  },
  methods: {
    success(type, res) {
      this.form[type] = res;
    },
    onSubmit() {
      [
        this.form.addressProvince,
        this.form.addressCity,
        this.form.addressRegion
      ] = this.form.area;
      let formed = Object.values(this.form).every(item => {
        return item !== "";
      });
      if (formed) {
        submitAuthBus(this.form)
          .then(result => {
            if (result) {
              this.notice("success", "已提交认证!");
              this.$router.replace({
                path: "/account/Certification/index"
              });
            }
          })
          .catch(() => {});
      } else {
        this.notice("warning", "请填写完整!");
      }
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
  text-align: center;
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
    color: rgba(204, 204, 204, 1);
    line-height: 26px;
  }
}
</style>
