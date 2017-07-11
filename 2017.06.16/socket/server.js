const net = require('net');
const server = net.createServer((socket) => {
    socket.on('data',(chunk)=>{
        console.log(chunk.toString());
        socket.write('你说啥');
    });
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