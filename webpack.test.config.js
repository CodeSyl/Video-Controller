var config = require('./webpack.config.js');
var webpack = require('webpack');

module.exports = {
    entry: 'mocha!./test/unitaire.js',
    output: {
        filename: 'test.build.js',
        path: 'test/',
        publicPath: '/'
    },
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
    devServer: {
        contentBase: './test', 
        port: "8081"
    }
};