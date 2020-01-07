/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2020-01-07 09:25:38
 * @LastEditors  : zero
 * @LastEditTime : 2020-01-07 10:15:08
 */

module.exports = {
  configureWebpack: {
    // 警告 webpack 的性能提示
    performance: {
      hints: "warning",
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith(".js");
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
      }
    }
  },
  // 配置跨域
  devServer: {
    // development server port 8000
    // port: 8000,
    proxy: {
      "/api": {
        target: "http://39.106.47.11:8080/platform",
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  publicPath: "./",
  // disable source map in production
  productionSourceMap: false,
  lintOnSave: undefined,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
};
