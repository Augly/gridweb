<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-31 11:40:33
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-07 18:24:13
 -->
<template>
  <div class="block-center--1200">
    <div class="wrap">
      <div class="silde">
        <ul class="ul">
          <li v-for="(item, index) in list" :key="item.id">
            <div class="ul_title" @click="select(item, index)">
              <i class="el-icon-tickets"></i>
              <span>{{ item.typeName }}</span>
            </div>
            <div v-if="item.open">
              <div
                class="ul_list"
                :class="selectIndex === index ? 'ul_list_active' : ''"
                v-for="(item, index) in artList"
                :key="item.id"
                @click="selectArt(index)"
              >
                {{ item.title }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="main">
        <p class="title">概述</p>
      </div>
    </div>
  </div>
</template>
<script>
import { guideTypes, getGuidesByType } from "@/api/document.js";
export default {
  data() {
    return {
      list: [],
      artList: [],
      selectIndex: 0
    };
  },
  mounted() {
    this.guideTypes();
  },
  methods: {
    select(item, index) {
      this.getGuidesByType(index);
    },
    selectArt(index) {
      this.selectIndex = index;
    },
    guideTypes() {
      guideTypes()
        .then(result => {
          if (result) {
            console.log(result);
            this.list = result.data.map(item => {
              let s = { ...item };
              s.open = false;
              return s;
            });
          }
        })
        .catch(() => {});
    },
    getGuidesByType(index) {
      console.log(this.list[index]);
      getGuidesByType({
        typeId: this.list[index].id
      })
        .then(result => {
          if (result) {
            console.log(result);
            this.list = this.list.map(item => {
              item.open = false;
              return item;
            });
            this.list[index].open = true;
            this.$set(this.list, index, this.list[index]);
            this.artList = result.data;
          }
        })
        .catch(() => {});
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
        cursor: pointer;
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
        }
        .ul_list {
          width: 100%;
          height: 36px;
          box-sizing: border-box;
          padding-left: 30px;
          padding-right: 17px;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 36px;
          cursor: pointer;
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
