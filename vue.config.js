const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/formore'
    : '/',
  chainWebpack: (config) => {
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|webp|avif|svg)(\?.*)?$/i)
      .set('type', 'asset')
  },
})
