const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = require('./webpack.common.config');

const browserPort = 8980;

// webpack构建本地服务器，基于node.js构建
// 是一个单独的文件，在webpack中进行配置之前需要安装作为项目依赖: 
// npm install --save-dev webpack-dev-server
// 配置项:
// contentBase: 默认webpack-dev-server会为根文件夹提供本地服务器，如果想在另一个目录下提供本地服务器，在这里设置其所在目录
// port: 设置默认监听端口，如果省略，默认为"8080"
// inline: 设置为true，当源文件改变时会自动刷新页面
// historyApiFallback: 在开发页面应用时非常有用，它依赖于HTML2 history API，如果设置为true，所有的额跳转将指向index.html
config.devServer = {
    publicPath: "/dist/",
    historyApiFallback: true,
    inline: true,
    port: browserPort
};

config.plugins.push(new OpenBrowserPlugin({url: `http:localhost:${browserPort}`}))
module.exports = config;