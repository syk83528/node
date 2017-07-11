/**
 * Created by syk on 17/6/17.
 */
// mark文件自动转换
const fs = require('fs');
const path = require('path');
const marked = require('marked');
// 制定需求,接收需要转换的文件路径
//process.argv是我们在命令行中敲入的命令比如:node 03.js '../read.md'
var target = path.join(__dirname,process.argv[2]||'../README.md');

//监视文件变化
//watchFile:1,路径 2回调函数,传文件当前状态和之前状态,interval,设置监视间隔
fs.watchFile(target,{interval:200},(curr,prev)=>{
    //监视是持续性的过程,所以运行js,控制台会被阻塞
    console.log('current:'+curr.size+'previous:'+prev.size);
    //判断文件内容到底有没有变化
    if (curr.mtime == prev.mtime) {
// ctime, 很多朋友把它理解成create time，包括很多误导人的书籍也是这么写。
// 实际上ctime是指change time。
// mtime, 就是modify time。
// mtime和ctime的区别在于，只有修改了文件的内容，才会更新文件的
// mtime，而对文件更名，修改文件的属主等操作，只会更新ctime。
        return false;
    }
    //读取路径,转换为新html
    fs.readFile(target,'utf8',(err,data)=>{
        if (err) {
            throw err;
        }
        //读取了数据后,将格式转换成html,肯定npm有成熟的库,学会去找
        var html = marked(data);
        console.log(html);
        //转成带html头的str

        // console.log(html);
        //获取css,写入
        fs.readFile(path.join(__dirname,'./markdown.css'),'utf8',(err,css)=>{
            if (err) {
                throw err;
            }
            //替换字符串
            html = template.replace('{{{content}}}',html).replace('{{{styles}}}',css);
            //写入文件,将.md等结尾替换成.html,然后写入文件
            fs.writeFile(target.replace(path.extname(target),'.html'),html,'utf8',(err)=>{
                if (err) {
                    throw err;
                }

            });
        });

    })
});

var template = `<!doctype html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <style>{{{styles}}}</style>
    </head>
    <body>
    <div class="markdown">{{{content}}}</div>
</body>
</html>`
;
