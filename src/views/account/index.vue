<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-31 10:54:21
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-02 17:58:48
 -->
<template>
  <div class="block-center--1200">
    <div class="wrap">
      <div class="silde">
        <ul class="ul">
          <li>
            <div class="ul_title">
              <span>账户中心</span>
            </div>
            <router-link
              v-for="(item, index) in rotelist"
              :key="index"
              :to="item.path"
              tag="div"
              class="ul_list"
              :class="$route.path.includes(item.path) ? 'ul_list_active' : ''"
              exact-active-class="ul_list_active"
            >
              <div>
                <i :class="item.icon"></i>
                <span>{{ item.meta.title }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  mounted() {
    console.log(this.rotelist);
  },
  computed: {
    ...mapState({
      rotelist: state => state.roterList[1].children
    }),
    myroute: function() {
      return this.$route.meta.title;
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/config.less";
.wrap {
  width: 100%;
  height: auto;
  margin: 10px 0px 20px 0px;
  display: flex;
  justify-content: space-between;
  .silde {
    width: 205px;
    min-height: 870px;
    box-sizing: border-box;
    padding-left: 15px;
    .bc(rgba(255, 255, 255, 1));
    .ul {
      width: 100%;
      height: auto;
      li {
        width: 100%;
        height: auto;
        .ul_title {
          width: 100%;
          height: 60px;
          font-size: 18px;
          .lineH(60px);
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          border-bottom: 1px solid rgba(240, 240, 240, 1);
          span {
            margin-left: 10px;
          }
          position: relative;
          &::before {
            position: absolute;
            left: -15px;
            top: 50%;
            margin-top: -9px;
            content: "";
            width: 10px;
            height: 19px;
            background: rgba(0, 148, 255, 1);
          }
        }
        .ul_list {
          width: 100%;
          height: 60px;
          box-sizing: border-box;
          padding-right: 17px;
          font-size: 18px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          line-height: 60px;
          color: rgba(51, 51, 51, 1);
          cursor: pointer;
          border-bottom: 1px solid rgba(240, 240, 240, 1);
          span {
            margin-left: 10px;
          }
        }
        .ul_list_active {
          color: rgba(0, 148, 255, 1);
          position: relative;
          &::after {
            position: absolute;
            content: "";
            width: 6px;
            height: 10px;
            top: 50%;
            margin-top: -5px;
            right: 17px;
            background-image: url("~@/assets/img/jt.png");
            background-size: 100% 100%;
          }
        }
      }
    }
  }
  .main {
    width: 985px;
    height: auto;
    .bc(rgba(255, 255, 255, 1));
    box-sizing: border-box;
    padding: 25px 45px;
    .title {
      font-size: 22px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 36px;
    }
  }
}
</style>
