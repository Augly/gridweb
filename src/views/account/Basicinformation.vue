<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-02 14:26:12
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-03 10:31:55
 -->
<template>
  <div>
    <p class="title">{{ myroute }}</p>
    <div class="from-wrap">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="姓名" required>
          <el-col :span="20">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="联系电话" required>
          <el-col :span="20">
            17633369350
          </el-col>
        </el-form-item>
        <el-form-item label="所在地区" required>
          <el-col :span="20">
            <el-cascader
              style="width:100%"
              :options="options"
              :props="props"
              v-model="form.area"
            ></el-cascader>
          </el-col>
        </el-form-item>
        <el-form-item label="通讯地址" required>
          <el-col :span="20">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-col :span="6" :offset="9"
            ><el-button
              type="primary"
              @click="onSubmit"
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
export default {
  data() {
    return {
      props: { multiple: false },
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
