/**
 * Created by syk on 17/6/19.
 */
var ejs = require('ejs'),
    fs = require('fs'),
    path = require('path'),
    http = require('http');

var server = http.createServer((req,res)=>{
    // if (req.url == '/views/index.html') {
        fs.readFile(path.join(__dirname, './views/index.ejs'), 'utf8', (err, data) => {
            var template = data.toString();
            var data = {
                a: 6
            };
            var html = ejs.render(template, data);
            res.writeHead(200,{'Content-Type':"text/html;charset:UTF8"});
            res.end(html);
        });
    // }else {
    //
    // }
});

server.listen(2080,(error)=>{
    if (error) throw error;

    console.log('启动服务器成功,监听2080端口');
});
// //数据绑定
// var html = ejs.render(str,data);
// //输出
// console.log(html);
//读取文件
