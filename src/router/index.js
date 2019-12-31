/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-12-30 17:46:21
 * @LastEditors  : zero
 * @LastEditTime : 2019-12-31 17:47:52
 */
import Vue from "vue";
import store from "@/store";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RouteView from "@/layout/basic.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Home,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        meta: {
          title: "首页"
        },
        isNav: true,
        component: () =>
          import(/* webpackChunkName: "index" */ "@/views/index.vue")
      },
      {
        path: "/cooperation",
        name: "cooperation",
        meta: {
          title: "业务合作"
        },
        isNav: true,
        component: () =>
          import(
            /* webpackChunkName: "cooperation" */
            "@/views/cooperation.vue"
          )
      },
      {
        path: "/document",
        name: "document",
        meta: {
          title: "文档中心"
        },
        isNav: true,
        component: () =>
          import(
            /* webpackChunkName: "cooperation" */
            "@/views//document/index.vue"
          ),
        children: []
      },
      {
        path: "/help",
        name: "help",
        meta: {
          title: "帮助支持"
        },
        isNav: true,
        component: () =>
          import(/* webpackChunkName: "cooperation" */ "@/views/help.vue")
      },
      {
        path: "/myApp",
        name: "myApp",
        meta: {
          title: "我的应用"
        },
        isNav: true,
        component: RouteView,
        redirect: "/myApp/index",
        children: [
          {
            path: "/myApp/index",
            name: "/myApp/index",
            meta: {
              title: "我的应用"
            },
            component: () =>
              import(
                /* webpackChunkName: "cooperation" */
                "@/views/myApp/index.vue"
              )
          },
          {
            path: "/myApp/add",
            name: "/myApp/add",
            meta: {
              title: "新增应用"
            },
            component: () =>
              import(
                /* webpackChunkName: "cooperation" */
                "@/views/myApp/add.vue"
              )
          }
        ]
      }
    ]
  }
];
let list = routes[0].children.map(item => {
  let _o = { ...item };
  _o.titles = [item.meta.title];
  if (_o.children && _o.children.length) {
    _o.titles = _o.titles.concat(findAllTitle(_o.children));
  }
  return _o;
});
function findAllTitle(list) {
  let arr = [];
  for (let i = 0; i < list.length; i++) {
    arr.push(list[i].meta.title);
    if (list[i].children && list[i].children.length) {
      arr = arr.concat(findAllTitle(list[i].children));
    }
  }
  return arr;
}
store.commit("SETROTER", list);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }), // 路由跳转后回到顶部
  routes
});

export default router;
