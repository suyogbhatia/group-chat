const express= require('express');
const app = express();
const socket= require('socket.io');
const http = require('http');

const server = http.createServer(app);

app.get('/', (req, res)=>{
    res.sendFile(__dirname +"/index.html");
})

server.listen(3000, ()=> {
    console.log("Server is listening to port: 3000");
});