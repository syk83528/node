/**
 * Created by syk on 17/6/19.
 */
var http = require('http');
var querystring = require('querystring');


var server = http.createServer((req,res)=>{

    //判断访问地址是否是/dopost
    if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        var data = '';
        req.addListener('data',(chunk)=>{
           data += chunk.toString();
        });
        req.addListener('end',()=>{
            console.log(data.toString());
            res.end('nihao');

            var dataObj = querystring.parse(data.toString());
            console.log(dataObj.name);
            console.log(dataObj.sex);
        });
    }
});

var port = 2080;
server.listen(port,(err)=>{
   if (err) {
       throw err;
   }
    console.log(`服务器启动成功,监听端口${port}`);
});
