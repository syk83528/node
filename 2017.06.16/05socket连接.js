const net = require('net');
const server = net.createServer((c) => {
    // 'connection' listener
    var client = c.address();
    // console.log(client.address+'连接了');

    console.log(`${c.remoteAddress}:${c.remotePort}进来了`);
    //监听client有数据过来
    // c.on('data',(chunk)=>{
    //     console.log(chunk.toString());
    // });
    // c.on('end', () => {
    //     console.log('client disconnected');
    // });
    // c.write('hello\r\n');
    // c.pipe(c);
    c.on('data',(chunk)=>{
       // c.write('你说啥');
        console.log(chunk.toString());
        c.write('你说啥');
    });
});
server.on('error', (err) => {
    throw err;
});

var port = 2080;
server.listen(port, (err) => {
    if (err) {
        console.log('端口被占用');
        // throw  err;
        return false;
    }
    //监听失败说明端口被别人用了
    console.log(`启动服务器成功,监听[${port}]端口`);
});