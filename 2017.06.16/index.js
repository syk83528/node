/**
 * Created by syk on 17/6/16.
 */
'use strict';
const http = require('http');

let count = 0;
const server = http.createServer((req,res)=>{
    res.write('你是第'+(count++)+'个用户');
    res.end();
});

server.listen(2080,(err)=>{
    if (err) {
        throw err;
    }
    console.log('成功启动web服务器,端口号2080');
});