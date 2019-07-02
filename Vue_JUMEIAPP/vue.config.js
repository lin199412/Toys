module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://s.h5.jumei.com/',
        changeOrigin: true,
        // withCredentials = true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  }
}
