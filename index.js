import express from 'express';

const app = express();
import * as socket from 'socket.io';
import * as http from 'http';
import path from 'path';

const server = http.createServer(app);
const io = new socket.Server(server);

io.on('connection',(socket)=>{
    socket.on('message', (msg)=>{
        io.emit('message', msg);
    })
})
app.get('/', (req, res)=>{
    res.sendFile(path.resolve()+'/index.html');
})

server.listen(3000, ()=> {
    console.log("Server is listening to port: 3000");
});