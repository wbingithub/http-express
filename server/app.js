var express = require('express');
// morgan是express默认的日志中间件，也可以脱离express，作为node.js的日志组件单独使用。
var logger = require('morgan');
// bodyParser用于解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理.
var bodyParser = require('body-parser');
var path = require('path');
//------------------------- start page  --------------------------------------------------------------------------------
var index = require('./routes/index'); // 首页
//-------------------------- end  page ---------------------------------------------------------------------------------

//-------------------------- start  API --------------------------------------------------------------------------------
var users = require('./data/users');
//-------------------------- end  API ----------------------------------------------------------------------------------




var app = express();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//------------------------------ start page-----------------------------------------------------------------------------
app.use('/', index);
//------------------------------- end page -----------------------------------------------------------------------------

//-------------------------- start  API --------------------------------------------------------------------------------
app.use('/api/users', users);
//-------------------------- end  API ----------------------------------------------------------------------------------

//404处理
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
//500处理
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.end();
});

module.exports = app;
