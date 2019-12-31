/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-12-30 17:46:21
 * @LastEditors  : zero
 * @LastEditTime : 2019-12-31 13:48:12
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roterList: []
  },
  mutations: {
    SETROTER: (state, option) => {
      state.roterList = option;
    }
  },
  actions: {
    // eslint-disable-next-line prettier/prettier
    setRoter ({ commit }, option) {
      commit("SETROTER", option);
    }
  },
  modules: {}
});
