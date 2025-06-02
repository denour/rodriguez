const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.svg$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
          outputPath: 'static/media/'
        }
      }
    ]
  })
); 