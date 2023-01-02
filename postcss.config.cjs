module.exports = (ctx) => {
  const { env } = ctx
  const plugins = {
    development: {
      autoprefixer: {},
    },
    production: {
      autoprefixer: {},
      'postcss-url': {
        url: 'copy',
        useHash: true,
      },
      cssnano: {
        preset: ['lite', { discardComments: { removeAll: true } }],
      },
    },
  }

  return {
    map: false,
    plugins: plugins[env],
  }
}
