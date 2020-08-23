/*配置vue反向代理，解决跨域问题*/
module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maizuo.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}