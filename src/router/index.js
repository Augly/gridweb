/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-12-30 17:46:21
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-06 15:03:22
 */
import Vue from "vue";
import store from "@/store";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RouteView from "@/layout/basic.vue";
import { Personl, Organization, Business } from "@/components";
Vue.use(VueRouter);
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
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
          title: "首页",
          clearBread: true
        },
        isNav: true,
        component: () =>
          import(/* webpackChunkName: "index" */ "@/views/index.vue")
      },
      {
        path: "/account",
        name: "account",
        meta: {
          title: "账户中心",
          clearBread: true
        },
        isNav: false,
        redirect: "/account/Basicinformation",
        component: () =>
          import(/* webpackChunkName: "account" */ "@/views/account/index.vue"),
        children: [
          {
            path: "/account/Basicinformation",
            name: "Basicinformation",
            meta: {
              title: "基本信息"
            },
            icon: "el-icon-document",
            component: () =>
              import(
                /* webpackChunkName: "account" */
                "@/views/account/Basicinformation.vue"
              )
          },
          {
            path: "/account/Certification",
            name: "Certification",
            meta: {
              title: "认证中心"
            },
            icon: "el-icon-warning-outline",
            component: RouteView,
            redirect: "/account/Certification/index",
            children: [
              {
                path: "/account/Certification/index",
                name: "CertificationIndex",
                meta: {
                  title: "认证中心"
                },
                component: () =>
                  import(
                    /* webpackChunkName: "account" */
                    "@/views/account/Certification.vue"
                  )
              },
              {
                path: "/account/Certification/Personl",
                name: "CertificationPersonl",
                meta: {
                  title: "个人认证"
                },
                component: Personl
              },
              {
                path: "/account/Certification/Business",
                name: "CertificationBusiness",
                meta: {
                  title: "企业认证"
                },
                component: Business
              },
              {
                path: "/account/Certification/Organization",
                name: "CertificationOrganization",
                meta: {
                  title: "组织认证"
                },
                component: Organization
              }
            ]
          },
          {
            path: "/account/password",
            name: "password",
            meta: {
              title: "修改密码"
            },
            icon: "el-icon-user",
            component: () =>
              import(
                /* webpackChunkName: "account" */
                "@/views/account/password.vue"
              )
          },
          {
            path: "/account/personlMessage",
            name: "personlMessage",
            meta: {
              title: "站内信息"
            },
            icon: "el-icon-bell",
            component: () =>
              import(
                /* webpackChunkName: "account" */
                "@/views/account/personlMessage.vue"
              )
          }
        ]
      },
      {
        path: "/cooperation",
        name: "cooperation",
        meta: {
          title: "业务合作",
          clearBread: true
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
          title: "文档中心",
          clearBread: true
        },
        isNav: true,
        component: () =>
          import(
            /* webpackChunkName: "document" */
            "@/views/document/index.vue"
          ),
        children: []
      },
      {
        path: "/help",
        name: "help",
        meta: {
          title: "帮助支持",
          clearBread: true
        },
        isNav: true,
        component: () =>
          import(/* webpackChunkName: "help" */ "@/views/help.vue")
      },
      {
        path: "/myApp",
        name: "myApp",
        meta: {
          title: "我的应用",
          clearBread: true
        },
        isNav: true,
        component: RouteView,
        redirect: "/myApp/index",
        children: [
          {
            path: "/myApp/Unauthorized",
            name: "Unauthorized",
            meta: {
              title: "我的应用"
            },
            component: () =>
              import(
                /* webpackChunkName: "myApp" */
                "@/views/Unauthorized.vue"
              )
          },
          {
            path: "/myApp/index",
            name: "/myApp/index",
            meta: {
              title: "我的应用"
            },
            component: () =>
              import(
                /* webpackChunkName: "myApp" */
                "@/views/myApp/index.vue"
              )
          },
          {
            path: "/myApp/template",
            name: "/myApp/template",
            meta: {
              title: "设置模板"
            },
            component: () =>
              import(
                /* webpackChunkName: "myApp" */
                "@/views/myApp/template.vue"
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
                /* webpackChunkName: "myApp" */
                "@/views/myApp/add.vue"
              )
          }
        ]
      },
      {
        path: "/new",
        name: "new",
        meta: {
          title: "新闻通知",
          clearBread: true
        },
        isNav: false,
        component: () =>
          import(
            /* webpackChunkName: "new" */
            "@/views/new/new.vue"
          )
      },
      {
        path: "/new/newRes",
        name: "newRes",
        meta: {
          title: "新闻详情"
        },
        isNav: false,
        component: () =>
          import(
            /* webpackChunkName: "new" */
            "@/views/new/newRes.vue"
          )
      },
      {
        path: "/ForgotPassword",
        name: "ForgotPassword",
        meta: {
          title: "忘记密码"
        },
        isNav: false,
        component: () =>
          import(
            /* webpackChunkName: "ForgotPassword" */
            "@/views/ForgotPassword.vue"
          )
      },
      {
        path: "/register",
        name: "register",
        meta: {
          title: "账户注册"
        },
        isNav: false,
        component: () =>
          import(
            /* webpackChunkName: "register" */
            "@/views/register.vue"
          )
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
