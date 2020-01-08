<template>
  <div class="head">
    <div class="head-top--black">
      <div class="block-center--1200">
        <div class="center-left">
          <img
            src="@/assets/img/dianhua@2x.png"
            alt=""
            srcset=""
            class="head-icon"
          />
          <span class="head-tell">服务热线：400-888-8888</span>
        </div>
        <div class="center-right">
          <el-link
            type="primary"
            :underline="false"
            v-if="!userInfo"
            @click="setLogin(true)"
            >登录</el-link
          >
          <el-link
            v-if="userInfo"
            class="head-user"
            type="primary"
            :underline="false"
            @click="toCount"
            >您好, {{ userInfo.account }}</el-link
          >
          <el-link
            v-if="userInfo"
            type="info"
            class="head-scope--out"
            :underline="false"
            @click="logoOut"
            >安全退出</el-link
          >
        </div>
      </div>
    </div>
    <div class="head-nav--white">
      <div class="block-center--1200">
        <div class="nav-left">
          <img src="@/assets/img/logo@2x.png" alt="" class="logo" />
          <span class="title">城市网格化系统技术开放平台</span>
        </div>
        <div class="nav-right">
          <ul class="nav-list">
            <router-link
              :to="item.path"
              v-for="(item, index) in list"
              :key="index"
              ><li :class="item.titles.includes(myroute) ? 'li_active' : ''">
                {{ item.meta.title }}
              </li></router-link
            >
          </ul>
        </div>
      </div>
    </div>
    <div class="mask">
      <el-dialog :show-close="false" :visible.sync="showLogin" width="500px">
        <div class="register">
          <div class="wrap">
            <h3 class="title">欢迎登录</h3>
            <p class="tip">请使用您本人的账号密码登录</p>
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
                  maxlength="11"
                ></el-input>
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
                  show-password
                  maxlength="12"
                  minlength="6"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-col :span="24">
                  <el-button
                    type="primary"
                    style="width:100%"
                    @click="submitForm('form', login)"
                    >确认</el-button
                  >
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-col :span="12" style="text-align:left;">
                  <el-link type="primary" :underline="false" @click="forget"
                    >忘记密码？</el-link
                  >
                </el-col>
                <el-col :span="12" style="text-align:right;">
                  <el-link :underline="false" @click="resiger"
                    >没有账号？去注册</el-link
                  >
                </el-col>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { login, getAreaTree } from "@/api/user.js";
import { getMyAuthInfo } from "@/api/auth";
import { VerifyPhone, VerifyPassword } from "@/utils/util.js";
import { ACCESS_TOKEN, USER_INFO, CITYLIST } from "@/store/config.js";
export default {
  data() {
    return {
      list: [],
      VerifyPhone,
      VerifyPassword,
      form: {
        account: "",
        password: ""
      }
    };
  },
  mounted() {
    if (this.$ls.get(USER_INFO)) {
      this.setUserInfo(this.$ls.get(USER_INFO));
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
    }
    this.list = [];
    for (let index = 0; index < this.rotelist.length; index++) {
      if (this.rotelist[index].isNav) {
        this.list.push(this.rotelist[index]);
      }
    }
  },
  computed: {
    showLogin: {
      get: function() {
        return this.$store.state.showLogin;
      },
      set: function(state) {
        this.$store.dispatch("setLogin", state);
      }
    },
    ...mapState({
      rotelist: state => state.roterList,
      userInfo: state => state.userInfo
    }),
    myroute: function() {
      return this.$route.meta.title;
    }
  },
  methods: {
    ...mapActions(["setLogin", "setUserInfo", "Logout", "setInfo"]),
    logoOut() {
      this.Logout()
        .then(() => {
          this.$router.replace({
            path: "/index"
          });
        })
        .catch(() => {});
    },
    forget() {
      this.$router.push({
        path: "/ForgotPassword"
      });
    },
    toCount() {
      this.$router.push({
        path: "/account"
      });
    },
    resiger() {
      this.$router.push({
        path: "/register"
      });
    },
    login() {
      //进行登录
      login(this.form)
        .then(result => {
          if (result) {
            this.$ls.set(
              ACCESS_TOKEN,
              result.data.platformToken,
              7 * 24 * 60 * 60 * 1000
            );
            this.$ls.set(
              USER_INFO,
              result.data.userInfo,
              7 * 24 * 60 * 60 * 1000
            );
            this.setUserInfo(result.data.userInfo);
            this.setLogin(false);
            getAreaTree()
              .then(result => {
                if (result) {
                  this.$ls.set(CITYLIST, result.data, 7 * 24 * 60 * 60 * 1000);
                }
              })
              .catch(() => {});
          }
        })
        .catch(() => {});
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/config.less";

.head {
  width: 100%;
  .head-top--black {
    .bg--black();
    .mH(40px);

    .block-center--1200 {
      .center-left {
        .c(rgba(195, 187, 187, 1));
        .floatL();
        .f(14px);
        .lineH();

        .head-icon {
          .wh(14px);
        }

        .head-tell {
          .marl(13px);
          .f(14px);

          &::before {
            content: "|";
            .lineH();
            .marR(10px);
          }
        }
      }

      .center-right {
        .c(rgba(255, 255, 255, 1));
        .floatR();
        .f(14px);
        .lineH();

        .head-user {
          .f(14px);
        }

        .head-scope--out {
          .f(14px);
          .marl(30px);
        }
      }
    }
  }

  .head-nav--white {
    clear: both;
    .bg--white();
    .mH(82px);

    .block-center--1200 {
      .nav-left {
        .floatL();
        .f(20px);
        .lineH(82px);
        .c(rgba(102, 102, 102, 1));

        .logo {
          margin-top: 8px;
          .wh(66px);
          .floatL();
        }

        .title {
          .marl(20px);
        }
      }

      .nav-right {
        .floatR();

        .nav-list {
          width: auto;
          .mH(82px);

          li {
            width: auto;
            .mH(82px);
            .floatL();
            .f(15px);
            .c(rgba(30, 30, 30, 1));
            font-family: Source Han Sans CN;
            .lineH(82px);
            .marl(109px);

            a {
              .c(rgba(30, 30, 30, 1));
            }
          }

          .li_active {
            .c(rgba(0, 148, 255, 1));
            position: relative;

            a {
              .c(rgba(0, 148, 255, 1));
            }

            &::before {
              position: absolute;
              top: 50%;
              margin-top: -2.5px;
              left: -8px;
              content: "";
              .wh(5px);
              background-color: rgba(0, 148, 255, 1);
            }
          }
        }
      }
    }
  }
}
.mask {
  /deep/ .el-dialog {
    background: transparent;
  }
  /deep/ .el-dialog__header {
    padding: 0;
  }
  .register {
    width: 500px;
    height: 540px;
    margin: -30px -20px;
    background: url("~@/assets/img/bg.png");
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .wrap {
      width: 335px;
      .title {
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(0, 148, 255, 1);
      }
      .tip {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-top: 11px;
        margin-bottom: 50px;
      }
    }
  }
}
</style>
