//简历socket连接

const net = require('net');
const client = net.connect({ port: 2080 }, () => {
    //'connect' listener
    console.log('connected to server!');
    // client.write('world!\r\n');
});

process.stdin.on('data',(chunk)=>{
    // console.log(chunk.toString());
    client.write(chunk.toString().trim());
});
client.on('data', (chunk) => {
    console.log(chunk.toString());
    // client.end();
});
// client.on('end', () => {
//     console.log('disconnected from server');
// });