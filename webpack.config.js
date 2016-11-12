var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/src',
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './js/client.js',
  module:{
  	loaders: [
  		{
  			test: /\.js?$/,
  			exclude: /(node_modules|bower_components)/,
  			loader: 'babel-loader',
  			query:{
  				presets: ['react','es2015','stage-0'],
  				plugins:['react-html-attrs','transform-class-properties','transform-decorators-legacy']
  			}
  		
      },{
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
  	]
  },

  resolve: {
    extensions: ['', '.js']
  },

  output: {
    path: __dirname + '/src/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src', 
    hot: true
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
     new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
    new webpack.NoErrorsPlugin()
  ],
};