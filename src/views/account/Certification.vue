<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-02 14:25:18
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-08 17:44:46
 -->
<template>
  <div>
    <p class="title">{{ myroute }}</p>
    <div>
      <p class="tip">说明：为保证账户安全，建议您优先完成实名认证。</p>
      <div class="note">
        {{
          info && info.authStatus == 0
            ? "实名认证会对您账号归属有很大影响，请正确选择认证类型。企业使用的帐号请勿做个人认证，以避免人员变动、交接账号时可能产生的纠纷，并且可能影响退款和获取发票。"
            : info && info.authStatus == 1
            ? "您提交的认证正在审核中~~~"
            : "您的认证已被拒绝,拒绝原因为" +
              info.authBase.rejectReason +
              ",请重新提交审核"
        }}
      </div>
      <div
        class="tab"
        v-if="(info && info.authStatus == 0) || (info && info.authStatus == 3)"
      >
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
import { mapState, mapActions } from "vuex";
import { getMyAuthInfo } from "@/api/auth";
export default {
  data() {
    return {
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
  mounted() {
    this.getInfo();
  },

  methods: {
    ...mapActions(["setInfo"]),
    check() {
      if (this.userInfo.authType === 1 && this.userInfo.authStatus === 2) {
        this.$router.replace({
          path: "/account/Certification/Personl"
        });
      } else if (
        this.userInfo.authType === 2 &&
        this.userInfo.authStatus === 2
      ) {
        this.$router.replace({
          path: "/account/Certification/Business"
        });
      } else if (
        this.userInfo.authType === 3 &&
        this.userInfo.authStatus === 2
      ) {
        this.$router.replace({
          path: "/account/Certification/Organization"
        });
      }
    },

    getInfo() {
      if (this.$ls.get("userInfo").authStatus === 2) {
        this.check();
      } else {
        getMyAuthInfo()
          .then(result => {
            if (result) {
              this.info = result.data;
              let s = this.$ls.get("userInfo");
              s.authStatus = result.data.authStatus;
              this.$ls.set("userInfo", s);
              this.setInfo(result.data);
              this.check();
            }
          })
          .catch(() => {});
      }
    },
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
  destroyed() {
    getMyAuthInfo()
      .then(result => {
        if (result) {
          let s = this.$ls.get("userInfo");
          s.authStatus = result.data.authStatus;
          this.$ls.set("userInfo", s);
          this.setInfo(result.data);
        }
      })
      .catch(() => {});
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      info: state => state.info
    }),
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
