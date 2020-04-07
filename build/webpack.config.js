const path = require('path');
module.exports = {
  mode: 'development', //开发模式
  entry: path.resolve(__dirname, '../app/main.js'),
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, '../dist')
  }
}