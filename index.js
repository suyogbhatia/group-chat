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

app.use(express.static(__dirname + '../react-app/build'));
app.get('/', (req, res)=>{
    res.sendFile(__dirname +"/index.html");
})

server.listen(8080, ()=> {
    console.log("Server is listening to port: 8080");
});