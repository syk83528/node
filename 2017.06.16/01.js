/**
 * Created by syk on 17/6/17.
 */
//创建模块文件
    //定义成员,导出模块,载入模块,使用模块
const fs = require('fs');
const path = require('path');

//目标,逐层创建文件夹
function mkdirs(pathName, callback) {
    //1.解析path,判断传入的是否是一个绝对路径
    pathName = path.isAbsolute(pathName) ? pathName : path.join(__dirname, pathName);
    // 获取要创建的部分
    // pathName = pathName.replace(__dirname,'');//这是替换操作
    pathName = path.relative(__dirname, pathName);//这是相对路径操作,从__dirname到pathName的路径
    console.log(pathName);

    //获取目标路径分割的数组,判断是用'\\'还是'/',可以用path.sep获取
    var foloders = pathName.split(path.sep);
    console.log(foloders);
    try {
        var prePath = __dirname;
        foloders.forEach(foloder=>{//逐层往下创建文件夹

            fs.mkdir(path.join(prePath,foloder));
            prePath = path.join(__dirname,foloder);
        });
        callback && callback(null);
    }catch(error)  {
        callback && callback(error);
    }

}


module.exports = mkdirs;