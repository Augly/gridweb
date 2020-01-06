<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-12-30 17:46:21
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-06 16:13:51
 -->
<template>
  <div class="full">
    <page-header></page-header>
    <div class="router">
      <Breadcrumb />
      <router-view> </router-view>
    </div>
    <page-footer></page-footer>
  </div>
</template>
<script>
import { PageFooter, PageHeader, Breadcrumb } from "@/components/index";

export default {
  name: "home",
  components: {
    PageFooter,
    PageHeader,
    Breadcrumb
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.full {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .router {
    position: relative;
    width: 100%;
    flex: auto;
    background-color: RGBA(244, 244, 244, 1);
  }
}
</style>
