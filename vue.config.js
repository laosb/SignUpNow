module.exports = {
  pwa: {
    workboxOptions: {
      importWorkboxFrom: 'local',
      runtimeCaching: [{
        urlPattern: /^[REDACTED]//i,
        handler: 'networkFirst'
      }]
    },
    name: '报名啦',
    themeColor: '#3949ab',
    msTileColor: '#3949ab',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  },
  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: '.'
        }
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('yml')
      .test(/\.yml$/)
      .use('js-yaml-loader')
      .loader('js-yaml-loader')
      .tap(opts => ({ ...opts, safe: true }))
      .end()
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
  }
}
