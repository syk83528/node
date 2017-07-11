/**
 * Created by syk on 17/6/19.
 */
var http = require('http');
var querystring = require('querystring');
var formidable = require('formidable'),
    util = require('util'),
    path = require('path'),
    sd = require('silly-datetime'),
    fs = require('fs');

var server = http.createServer((req, res) => {

    //判断访问地址是否是/dopost
    if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();
        form.uploadDir = './uploads';
        form.parse(req, function (err, fields, files) {
            console.log(fields);
            console.log(files);

            //shijian
            var ttt = sd.format(new Date(), 'YYYYMMDDHHmm');
            var ran = parseInt(Math.random() * 89999 + 10000);
            var extname = path.extname(files.img.name);


            var oldpath = path.join(__dirname,files.img.path);
            var newpath = __dirname + '/uploads/' + ttt + ran + extname;
            fs.rename(oldpath, newpath, (err) => {
                if (err) {
                    throw err;
                }
                res.writeHead(200, {'content-type': 'text/plain','charset':'utf8'});
                res.end('成功上传了!');
            })


        });

    }
});

var port = 2080;
server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`服务器启动成功,监听端口${port}`);
});
