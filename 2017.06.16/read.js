/**
 * Created by syk on 17/6/19.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{

    console.log(req.url);
    if (req.url == 'favicon.ico') {
        return ;
    }

    fs.readFile('./',(err,data)=>{
       if (err) {
           throw err;
       }
        console.log(data);
    });
}).listen(2080,'127.0.0.1');