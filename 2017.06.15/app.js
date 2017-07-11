// var fs = require('fs');
//
// fs.readFile('./01.json','utf8',function (err,data) {
//     console.log(data);
//     console.log(err);
// });
// console.log(__dirname);
var readf = require('readf');

readf.readFile(__dirname+'/01.json',function (data) {
    console.log(data);
});