const HtmlWebPackPlugin = require('html-webpack-plugin')
const formerKitRules = require('./formerKit/webpack.config')

const htmlPlugin = new HtmlWebPackPlugin({
  filename: './index.html',
  template: './src/index.html',
})

const rules = [
  {
    exclude: /node_modules/,
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
    },
  },
].concat(formerKitRules)

rules.concat()

module.exports = {
  module: {
    rules,
  },
  plugins: [htmlPlugin],
}
