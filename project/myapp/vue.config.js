/*配置vue反向代理，解决跨域问题*/
module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack:(config) => {
    //调试JS
    config.devtool = "source-map"
  },
  css: {
    //查看CSS属于哪个css文件
    sourceMap: true,
  },
}