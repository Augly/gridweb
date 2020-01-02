<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-02 14:25:18
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-02 18:02:09
 -->
<template>
  <div>
    <p class="title">{{ myroute }}</p>
    <div>
      <p class="tip">说明：为保证账户安全，建议您优先完成实名认证。</p>
      <div class="note">
        实名认证会对您账号归属有很大影响，请正确选择认证类型。企业使用的帐号请勿做个人认证，以避免人员变动、交接账号时可能产生的纠纷，并且可能影响退款和获取发票。
      </div>
      <div class="tab">
        <div class="tab-head">
          <div
            class="tab_item "
            :class="index === activeIndex ? 'tab_item_active' : ''"
            v-for="(item, index) in list"
            :key="index"
            @click="activeIndex = index"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="tab-content">
          <p>
            {{ list[activeIndex].content }}
          </p>
          <el-button type="primary" size="small" class="button" @click="toRes"
            >立即认证</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      activeIndex: 0,
      list: [
        {
          title: "企业实名认证",
          content:
            "适用于企业、单位，须提交企业真实信息、营业执照、法人证件等相关资质进行认证。"
        },
        {
          title: "组织机构认证",
          content:
            "适用于组织机构，须提交组织真实信息、组织机构证件照等相关资质进行认证。"
        },
        {
          title: "个人实名认证",
          content:
            "个人实名认证，须提交真实姓名、身份证号、手机号码信息进行认证，系统自动快速审核。"
        }
      ]
    };
  },
  components: {},
  methods: {
    toRes() {
      if (this.activeIndex === 0) {
        this.$router.push({
          path: "/account/Certification/Business"
        });
      } else if (this.activeIndex === 1) {
        this.$router.push({
          path: "/account/Certification/Organization"
        });
      } else {
        this.$router.push({
          path: "/account/Certification/Personl"
        });
      }
    }
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
.tip {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 28px;
  .marT(40px);
}
.note {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 10px 20px;
  .marT(20px);
  .bc(rgba(249, 249, 252, 1));
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 28px;
}
.tab {
  width: 100%;
  height: auto;
  min-width: 300px;
  .bc(rgba(249, 249, 252, 1));
  .marT(30px);
  .tab-head {
    box-sizing: border-box;
    border-top: 1px solid rgba(238, 238, 238, 1);
    width: 100%;
    height: 50px;
    .bc(rgba(255, 255, 255, 1));
    .tab_item {
      box-sizing: border-box;
      border-top: 3px solid transparent;
      display: inline-block;
      width: 140px;
      height: 50px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
      line-height: 50px;
      text-align: center;
      cursor: pointer;
    }
    .tab_item_active {
      border-top: 3px solid rgba(0, 148, 255, 1);
      color: rgba(0, 148, 255, 1);
      background-color: rgba(249, 249, 249, 1);
    }
  }
  .tab-content {
    box-sizing: border-box;
    padding: 45px 40px;
    p {
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 28px;
    }
    .button {
      display: block;
      margin: 0 auto;
      margin-top: 60px;
    }
  }
}
</style>
