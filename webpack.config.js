const path = require('path');

module.exports = {
  mode: 'development',
  entry: '/src/app.js',
  devtool: 'inline-source-map',
  watch: true,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};