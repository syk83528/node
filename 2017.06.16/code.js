/**
 * Created by syk on 17/6/17.
 */
//创建模块文件
    //定义成员,导出模块,载入模块,使用模块
const fs = require('fs');
const path = require('path');

const mkdirs = require('./01.js');

mkdirs(path.join(__dirname,'./demo2/demo3'),(err )=>{

});