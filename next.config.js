const path = require('path')
const glob = require('glob')
const withSASS = require('@zeit/next-sass')

const commonsChunkConfig = (config, test = /\.css$/) => {
  config.plugins = config.plugins.map(plugin => {
    if (
      plugin.constructor.name === 'CommonsChunkPlugin' &&
      plugin.minChunks != null
    ) {
      const defaultMinChunks = plugin.minChunks
      plugin.minChunks = (module, count) => {
        if (module.resource && module.resource.match(test)) {
          return true
        }
        return defaultMinChunks(module, count)
      }
    }
    return plugin
  })
  return config
}

module.exports = withSASS({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[local]'
  },

  distDir: 'public',

 
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  },

  webpack: config => {

    config = commonsChunkConfig(config, /\.(sass|scss|css)$/)

    config.module.rules.forEach((rule) => {
      if (rule.use.loader === 'next-babel-loader') {
        rule.use.options.cwd = undefined;
      }
    });

    const resolveConfig = config['resolve'] || {}
    resolveConfig.alias = resolveConfig['alias'] || {}

    const addAlias = p => resolveConfig.alias[p] = path.resolve(__dirname, 'node_modules', p)

    addAlias('styled-components')

    return {
      ...config,
      resolve: resolveConfig
    } 

  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
    
  }

})



