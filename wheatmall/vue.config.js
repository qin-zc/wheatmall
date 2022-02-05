module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@': 'src',
        'views': '@/views',
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'assets': '@/assets',
      }
    }
  }
}