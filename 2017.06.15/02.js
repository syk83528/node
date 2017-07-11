/**
 * Created by syk on 17/6/16.
 */
const fs = require('fs');

fs.stat('./read.json', (err) => {
    //不存在
    if (err) {
        //创建文件
        fs.writeFile('./read.json', new Date(), (err) => {
            //写入失败
            if (err) {
                console.error('文件写入失败');
                return false;
            }
            console.log('创建文件成功');

        });
        return false;
    }
    //删除并创建
    fs.unlink('./read.json',(err)=>{
        if (err) {
            console.error('文件删除失败');
            return false;
        }
        fs.writeFile('./read.json', new Date(), (err) => {
            //写入失败
            if (err) {
                console.error('文件写入失败');
                return false;
            }
            console.log('删除并创建文件成功');

        });
        return false;
    })
});