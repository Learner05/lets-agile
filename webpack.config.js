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
,devtool: 'source-map'
,devServer: {
   inline: true
  ,contentBase: BUILD_DIR
  ,port: 3333
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
},
{
      test: /\.(png|jp(e*)g|svg)$/,
      use: [{
          loader: 'url-loader',
          options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]'
          }
      }]
  }
  ]

 }
}

module.exports = config
