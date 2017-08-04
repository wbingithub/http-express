var app = require('./app');
var http = require('http');
var c = require('child_process');
/**
 * 设置监听端口
 */
var PORT = '8000';
app.set('port', PORT);
/**
 * 创建 HTTP server.
 */
var server = http.createServer(app);
/**
 *  设置服务监听处理
 */
server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);
/**
 * 启动失败处理
 */
function onError(error) {
    console.log("启动失败")
}
/**
 * 启动成功
 */
function onListening() {
    c.exec('start http://localhost:'+PORT);
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
}
