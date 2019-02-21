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

    return config

  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      // 'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
      // 'react': path.resolve(__dirname, 'node_modules/react')
      modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
    },
    
  }

})

