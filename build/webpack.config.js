const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Webpack = require('webpack');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  mode: 'development', //开发模式
  entry: ["@babel/polyfill", path.resolve(__dirname, '../src/main.js')],
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer:{
    port: 3333,
    hot: true,
    contentBase: '../dist',
    // 自动压缩代码
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename:'index.html'
    }),
    new CleanWebpackPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new vueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test:/\.vue$/,
        use:['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /(\.jsx|\.js)$/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
            }
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
    ],
  },
  resolve: {
    alias: {
      'vue$':'vue/dist/vue.runtime.esm.js',
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['*', '.js', '.json', 'vue']
  }
}