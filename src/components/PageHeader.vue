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
          <span class="head-user">您好, 152****8300</span>
          <span class="head-scope--out">安全退出</span>
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
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.list = [];
    for (let index = 0; index < this.rotelist.length; index++) {
      if (this.rotelist[index].isNav) {
        this.list.push(this.rotelist[index]);
      }
    }
  },
  computed: {
    ...mapState({
      rotelist: state => state.roterList
    }),
    myroute: function() {
      return this.$route.meta.title;
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
</style>
