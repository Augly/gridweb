/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-12-30 17:46:21
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-06 16:16:07
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roterList: [],
    showLogin: false,
    breadList: [],
    isLogin: false
  },
  mutations: {
    SETROTER: (state, option) => {
      state.roterList = option;
    },
    SETBREADLIST: (state, option) => {
      state.breadList = option;
    },
    SETLOGIN: (state, show) => {
      state.showLogin = show;
    }
  },
  actions: {
    setRoter({ commit }, option) {
      commit("SETROTER", option);
    },
    setLogin({ commit }, option) {
      commit("SETLOGIN", option);
    },
    setBread({ commit, state }, option) {
      if (option === "clear") {
        commit("SETBREADLIST", []);
      } else {
        state.breadList.push(option);
      }
    }
  },
  modules: {}
});
