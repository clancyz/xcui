/**
 * @file webpack.dev.conf.js
 */

var webpack = require('webpack');
var config = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

// eval-source-map is faster for development
// config.devtool = '#eval-source-map'
config.devtool = 'source-map';

// add hot-reload related code to entry chunks
var polyfill = 'eventsource-polyfill';
var hotClient = 'webpack-hot-middleware/client?noInfo=true&reload=true';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = i === 0 ? [polyfill, hotClient] : [hotClient];
    config.entry[name] = extras.concat(config.entry[name]);
});

// necessary for the html plugin to work properly
// when serving the html from in-memory
config.output.publicPath = '/';

config.plugins = (config.plugins || []).concat([
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    }),
    new FaviconsWebpackPlugin({
        logo: './src/assets/favicon.png',
        icons: {
              android: false,
              appleIcon: false,
              appleStartup: false,
              coast: false,
              favicons: true,
              firefox: false,
              opengraph: false,
              twitter: false,
              yandex: false,
              windows: false
            }
    })
]);

module.exports = config;
