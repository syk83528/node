/**
 * Created by syk on 17/6/16.
 */
var fs = require('fs');
var path = require('path');

// console.log(path.join(__dirname, './node_modules/test/index.js'));
// fs.mkdir('./test', (err) => {
//     if (err) {
//         throw err;
//     }
//     // //写入信息
//     fs.writeFile('./test/a.txt', 'vae','utf8', (err, data) => {
//         if (err) {
//             throw err;
//         }
//         //读取信息
//         fs.readFile('./test/a.txt','utf8', (err, data) => {
//                 if (err) {
//                     throw err;
//                 }
//                 console.log(data);
//             }
//         )
//     })
// });
fs.stat('./app.js',(err,stats)=>{
    // console.log(stats);
    if (err) {
        console.error(err);
    }

    fs.unlink('./app.js',(err)=>{

    });
});
