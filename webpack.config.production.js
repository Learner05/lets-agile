var webpack = require("webpack");
var path    = require("path");

var BUILD_DIR = path.resolve(__dirname + '/build')
var APP_DIR = path.resolve(__dirname + '/app')
var SRC_DIR = path.resolve(__dirname + '/src')

console.log(BUILD_DIR);
console.log(APP_DIR);

var config = {
  mode: "development"
  ,entry: APP_DIR + '/index.jsx'
 ,output: {
     path: BUILD_DIR
    ,filename: 'bundle.js'
    ,publicPath: '/'
  }
 ,module: {
    rules: [
      {
         test: /\.jsx?/
	,include: APP_DIR
	,loader: 'babel-loader'
	,query: {
 	   presets: ['env', 'react']
	}
      }
  ]

 }
 , plugins : [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
 ]
}

module.exports = config
