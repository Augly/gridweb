<template>
  <div id="content">
    <!-- banner -->
    <div class="banner"></div>
    <!-- 消息 -->
    <div class="message">
      <div class="block-center--1200">
        <div class="message-head">
          <div class="message-head--title">
            <img
              src="@/assets/img/xiaoxi@2x.png"
              alt=""
              srcset=""
              class="message-icon"
            />
            <span class="title">消息</span>
          </div>
          <div class="message-head--more">
            <span class="more">更多</span>
            <img
              src="@/assets/img/youcejiantou@2x.png"
              alt=""
              class="icon-jt"
            />
          </div>
        </div>
        <div class="message-content">
          <ul>
            <li>
              <h6 class="title">天津开启“网格化”精细治污</h6>
              <p class="dec">
                中，从天津市环保局了解到，今年3月，天津大气污染防治启动了“网格化管理”的方法细化式
              </p>
            </li>
            <li>
              <h6 class="title">天津开启“网格化”精细治污</h6>
              <p class="dec">
                中，从天津市环保局了解到，今年3月，天津大气污染防治启动了“网格化管理”的方法细化式
              </p>
            </li>
            <li>
              <h6 class="title">天津开启“网格化”精细治污</h6>
              <p class="dec">
                中，从天津市环保局了解到，今年3月，天津大气污染防治启动了“网格化管理”的方法细化式
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 查询覆盖区域 -->
    <div class="search">
      <div class="picker">
        系统：<el-cascader
          v-model="value"
          :options="options"
          @change="handleChange"
        ></el-cascader>
      </div>
      <div class="sear">
        覆盖区域：<el-button type="primary" style="width:156px"
          >点击查询</el-button
        >
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="aboutUs">
      <div class="block-center--1200">
        <h5 class="part-title">关于我们</h5>
        <p class="part-describe">about us</p>
        <div class="aboutUs-content">
          <div class="aboutUs-content--main">
            <h4 class="main-title">平台简介</h4>
            <p class="main-p">
              在已打通各政务机构的基础上，网格化开放平台接入数据接口，以实现用户通过网格化开放平台进行市政各方面问题的反馈和跟进功能。各三方平台，通过接入网格化开放平台的方式，以平台为媒介和桥梁，进行通信和交互，已达到整合各平台，实现数据汇总、政通普及和用户的便捷实用。
            </p>
            <p class="main-p">
              网格化开放平台接入数据接口，以实现用户通过网格化开放平台进行市政各方面问题的反馈和跟进功能。各三方平台，通过接入网格化开放平台的方式
            </p>
          </div>
          <img
            src="@/assets/img/guanyuwomen@2x.png"
            alt=""
            class="aboutUs-content--logo"
          />
        </div>
      </div>
    </div>
    <!-- 开发者服务 -->
    <div class="server">
      <div class="block-center--1200">
        <h5 class="part-title">开发者服务</h5>
        <p class="part-describe">service</p>
        <ul class="serverUl">
          <li>
            <img src="@/assets/img/icon_9@2x.png" alt="" />
            <h5>稳定的服务器</h5>
            <p>网格化开放平台接入数据接口，以实现用户通过网格化</p>
          </li>
          <li>
            <img src="@/assets/img/icon_8@2x.png" alt="" />
            <h5>技术支持</h5>
            <p>网格化开放平台接入数据接口，以实现用户通过网格化</p>
          </li>
          <li>
            <img src="@/assets/img/icon_10@2x.png" alt="" />
            <h5>推送服务</h5>
            <p>网格化开放平台接入数据接口，以实现用户通过网格化</p>
          </li>
          <li>
            <img src="@/assets/img/icon_13@2x.png" alt="" />
            <h5>深度集成</h5>
            <p>网格化开放平台接入数据接口，以实现用户通过网格化</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 接入流程 -->
    <div class="liuchen">
      <div class="block-center--1200">
        <h5 class="part-title">接入流程</h5>
        <p class="part-describe">Process</p>
        <img src="@/assets/img/serve@2x.png" alt="" class="serveBanner" />
      </div>
    </div>
    <!-- 战略合作 -->
    <div class="Cooperation">
      <div class="block-center--1200">
        <h5 class="part-title">战略合作</h5>
        <p class="part-describe">Cooperation</p>
        <div class="peration-content">
          <img src="@/assets/img/tianjinheping.png" alt="" />
          <img src="@/assets/img/shuzi.png" alt="" />
          <img src="@/assets/img/binhai.png" alt="" />
          <img src="@/assets/img/tinajin.png" alt="" />
          <img src="@/assets/img/haidian.png" alt="" />
          <img src="@/assets/img/chaoyang.png" alt="" />
          <img src="@/assets/img/tongzhou.png" alt="" />
          <img src="@/assets/img/shunyi.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    const loading = this.$loading({
      lock: true,
      text: "数据加载中...",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    setTimeout(() => {
      loading.close();
    }, 2000);
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/config";

.banner {
  width: 100%;
  height: 500px;
  .bc();
}

.message {
  width: 100%;
  overflow: hidden;
  .bc(rgab(255, 255, 255, 1));

  .message-head {
    .mH(70px);
    .lineH(70px);

    .message-head--title {
      .floatL();

      .message-icon {
        .wh(39px);
        .padT(15px);
        .floatL();
      }

      .title {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(40, 40, 40, 1);
        .marl(10px);
      }
    }

    .message-head--more {
      .floatR();

      .more {
        .c(rgba(119, 119, 119, 1));
        .f(14px);
      }

      .icon-jt {
        .floatR();
        .wh(8px, 13px);
        .padT(29px);
        .marl(10px);
      }
    }
  }

  .message-content {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    border-top: 1px solid rgba(245, 245, 245, 1);
    border-left: 1px solid rgba(245, 245, 245, 1);
    border-right: 1px solid rgba(245, 245, 245, 1);

    ul {
      width: 100%;
      height: auto;
      overflow: hidden;
      .padB(30px);

      li {
        width: 50%;
        height: auto;
        margin-top: 37px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        .padL(48px);

        .floatL();

        .title {
          .f(16px);
          font-family: Source Han Sans CN;
          font-weight: bold;
          .c(rgba(51, 51, 51, 1) ;);
        }

        .dec {
          max-width: 453px;
          .f(14px);
          font-family: Source Han Sans CN;
          font-weight: 400;
          .c(rgba(102, 102, 102, 1));
          .padT(23px);
        }
      }

      li:nth-child(2n + 1) {
        border-right: 1px solid rgba(237, 237, 237, 1);
      }
    }
  }
}

.search {
  width: 100%;
  height: 195px;
  background-image: url("~@/assets/img/banner.png");
  background-size: 100% 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  .picker {
    width: 300px;
    height: 40px;
    .marT(108px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sear {
    .marT(108px);
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.part-title {
  font-size: 30px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  .textCenter();
}

.part-describe {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  .textCenter();
  margin-top: 18px;
}

.aboutUs {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 120px 0px 168px;
  .bc(rgba(251, 251, 251, 1));

  .aboutUs-content {
    overflow: hidden;
    margin-top: 57px;

    .aboutUs-content--main {
      max-width: 718px;
      .floatL();

      .main-title {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }

      .main-p {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 28px;
        .marT(37px);
      }
    }

    .aboutUs-content--logo {
      display: block;
      .floatR();
      .wh(442px, 346px);
    }
  }
}

.server {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 120px 0px 145px;

  .serverUl {
    width: 100%;
    height: auto;
    overflow: hidden;
    .marT(66px);

    li {
      width: 284px;
      box-sizing: border-box;
      height: 311px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(238, 238, 238, 1);
      border-radius: 2px;
      .floatL();
      .marl(20px);

      img {
        .wh(90px);
        display: block;
        margin: 0 auto;
        .marT(44px);
      }

      h5 {
        text-align: center;
        font-size: 24px;
        line-height: 24px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        .marT(25px);
      }

      p {
        width: 188px;
        height: 43px;
        font-size: 18px;
        font-family: Source Han Sans CN;
        // font-weight: bold;
        color: rgba(153, 153, 153, 1);
        line-height: 20px;
        display: block;
        margin: 0 auto;
        .marT(20px);
      }
    }

    li:nth-child(4n + 1) {
      .marl(0px);
    }
  }
}

.liuchen {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 120px 0px 114px;
  .bc(rgba(248, 249, 250, 1));

  .serveBanner {
    .marT(51px);
    .wh(100%, auto);
  }
}

.Cooperation {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 120px 0px 184px;
  .bc(rgba(255, 255, 255, 1));

  .peration-content {
    overflow: hidden;
    .marT(90px);

    img {
      .wh(285px, 118px);
      .floatL();
      .marT(20px);
      .marl(20px);
    }

    img:nth-child(4n + 1) {
      .marl(0px);
    }
  }
}
</style>
