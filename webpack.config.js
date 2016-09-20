const webpack = require('webpack');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 独立样式
const fs = require('fs');
const path = require('path');

const autoprefixer = require('autoprefixer');
const pluginsText = new Date().toUTCString() + '\n\r * built by `li-si`';

const ASSETS = 'assets'; // 输出目录名
var files = fs.readdirSync(`js/layout`);
var entryFiles = {};
for (var i = 0; i < files.length; i++) {
	var name = files[i].substring(0,files[i].lastIndexOf('.'));
	entryFiles[name] = `js/layout/${files[i]}`;
};
Object.assign(entryFiles,{
	// 自定义
	// name: '入口js'
});
module.exports = {
	// 页面入口文件配置
	entry: entryFiles,
	// 入口文件输出配置
	output: {
		publicPath: `./${ASSETS}/`,
		path: `${__dirname}/${ASSETS}`,
		filename: 'js/[name].js' //[chunkhash]
	},
	// 插件项
	plugins: [
		new CommonsChunkPlugin("js/common.js"),
		new webpack.BannerPlugin(pluginsText), //备注
		new TransferWebpackPlugin([{from: './images/tmp', to: `/images/tmp`}])
	],
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'jshint',
				exclude: /node_modules/
			}
	    ],
		loaders: [
			{test: /\.html$/, loader: 'pug'},
			{test: /\.js$/, loader:'babel',exclude:/(node_modules|bower_components)/,query: {presets:['es2015']}},
			{test: /\.css$/, loader: 'style!css!postcss'},
			{test: /\.(scss|sass)$/, loader: 'style!css!postcss!sass'},
			{test: /\.less$/, loader: 'style!css!postcss!less'},
			{test: /\.vue$/, loader: 'vue'},
			{test: /\.(json|data)$/, loader: 'json'},
			{test: /\.(txt|md)$/, loader: 'raw'},
			// {test: "js/lib/zepto.min.js", loader: "exports?$"},
			{test: /\.(png|jpg|jpeg)$/, loader: 'url?limit=8192&name=[path][name].[ext]?[hash]'}
		]
	},
	jshint: {
		"esnext": true,
		"elision": true
	},
	postcss: [ autoprefixer({ browsers: ['last 9 versions'], cascade: false }) ],
	// 其他配置
	resolve: {
		root: process.cwd(),
		extensions: ['', '.js', '.vue'],//自动扩展文件后缀名
		alias: {
			zepto: 			'js/lib/zepto.min.js',
			method: 		'js/lib/method.js',
			loading: 		'js/vue/loading.vue'

		}
	}
};