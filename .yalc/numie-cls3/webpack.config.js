const path = require('path');

module.exports = {
  entry: {
    main: './lib/index.js',
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      }
    ],
  },
  externals: {
    "styled-components": {
       commonjs: "styled-components",
       commonjs2: "styled-components",
       amd: "styled-components",
     }
  }
}