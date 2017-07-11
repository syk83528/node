/**
 * Created by syk on 17/6/17.
 */
var fs = require('fs');
var path = require('path');

//创建文件读取留,并没有读出真正的数据,但已经开始读取的任务
// console.time('reader');

var readPath = '/Users/syk/Sites/2017.06.16/study.wmv';
// var writePath = pathStr.replace(path.extname(pathStr), '-copy' + path.extname(pathStr));
var writePath = '/Users/syk/Sites/2017.06.16/study1.wmv';

var reader = fs.createReadStream(readPath);
var writer = fs.createWriteStream(writePath);

reader
    .pipe(writePath);

// console.log(newStr);
// console.log(path.basename(pathStr,)

// fs.stat(pathStr, (err, stat) => {
//     if (err) {
//         throw err;
//     }
//     var reader = fs.createReadStream(pathStr);
//     //写个新路径
//     var writePath = pathStr.replace(path.extname(pathStr), '-copy' + path.extname(pathStr));
//     var writer = fs.createWriteStream(writePath);
//     // var writer = fs.createWriteStream(pa)
//     //  console.timeEnd('reader');
//
//     var readtotal = 0;
//     reader.on('data', (chunk) => {
//         //写入数据
//         writer.write(chunk,(err)=>{
//             console.log('已经写入' + ((readtotal += chunk.length) / (stat.size) * 100) + '%');
//         });
//
//     });
// });

