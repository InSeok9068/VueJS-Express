const path = require("path");
const webpack = require("webpack");

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = {
  outputDir: path.resolve(__dirname, "../backend/public/"),
  devServer: {
    proxy: {
      // proxyTable 설정
      "/api": {
        target: "http://localhost:3000/api",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
  lintOnSave: false,
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        src: resolveSrc("src"),
        "chart.js": "chart.js/dist/Chart.js",
      },
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6,
      }),
    ],
  },
  pwa: {
    name: "Vue Light Bootstrap Dashboard",
    themeColor: "#344675",
    msTileColor: "#344675",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#344675",
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production",
  },
};
