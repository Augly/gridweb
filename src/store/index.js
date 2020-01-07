/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-12-30 17:46:21
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-07 16:08:46
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roterList: [],
    showLogin: false,
    breadList: [],
    userInfo: null
  },
  mutations: {
    SETROTER: (state, option) => {
      state.roterList = option;
    },
    SETUSERINFO: (state, option) => {
      state.userInfo = option;
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
    setUserInfo({ commit }, option) {
      commit("SETUSERINFO", option);
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
    },
    Logout({ commit }) {
      return new Promise(resolve => {
        commit("SETUSERINFO", null);
        Vue.ls.clear();
        resolve();
      });
    }
  },
  modules: {}
});
