const express= require('express');
const app = express();
const {Server}= require('socket.io');
const http = require('http');

const server = http.createServer(app);
const io = new Server(server);

io.on('connection',(socket)=>{
    socket.on('message', (msg)=>{
        io.emit('message', msg);
    })
})
app.get('/', (req, res)=>{
    res.sendFile(__dirname +"/index.html");
})

server.listen(3000, ()=> {
    console.log("Server is listening to port: 3000");
});