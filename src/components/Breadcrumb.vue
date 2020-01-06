<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-01-06 14:30:28
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-06 15:05:40
 -->
<template>
  <div>
    <div class="bread" v-if="breadList.length > 1">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="(item, index) in breadList"
          :to="{ path: item.path }"
          :key="index"
          >{{ item.name }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      breadList: state => state.breadList
    })
  }
};
</script>
<style lang="less" scoped>
.bread {
  width: 1200px;
  margin: 0 auto;
  margin-top: 18px;
  margin-bottom: 15px;
}
</style>
