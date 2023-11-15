const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

module.exports = withNextra({
  basePath: require('./indexes').root,
  images: {
    unoptimized: true
  }
})