/**
 * Created by syk on 17/6/15.
 */
// var fs = require('fs');
// fs.readFile()
// var add = function (v1, v2) {
//     return v1 + v2;
// };
// console.log(module);
//
// console.log(process.version);
//
// module.exports = add;
//
// console.log(__dirname);
// console.log(__filename);
// var
//
//     console.time();
// for (var i = 0;i<10000;i++) {
//
// }
// console.timeEnd();
// console.log('我是万恶的分割线--------------------------');
// console.time();
// forEach(function (index,arr) {
//
// })
// console.timeEnd();

function MyRequire(path) {
    var fs = require('fs');
    //获取路径下代码
    var dataString = fs.readSync(path,'utf8');
    //拼成一个完整代码
    var fnString = '(function(exports,module){'+dataString+'return module.exports}';
    //获得一个函数
    var fn = eval(fnString);

    //定义一个module函数
    function Module() {
        this.exports = {};
    }

    var module = new Module();
    obj = fn(module.exports,module);
    return obj;

}

var add = MyRequire('./add.js');
console.log(add.a);