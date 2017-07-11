/**
 * Created by syk on 17/6/19.
 */
var ejs = require('ejs'),
    fs = require('fs'),
    path = require('path'),
    http = require('http'),
    express = require('express');

var app = express();

app.get('/',(req,res)=>{
   res.send('你好,这是主界面');
});

app.listen(3000,(err)=>{
    if (err) throw err;
    console.log('启动服务器成功,监听端口3000');
});
