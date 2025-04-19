import express from 'express';
// const express= require('express');

const app = express();
import * as socket from 'socket.io';
import * as http from 'http';
import path from 'path';
// const {Server}= require('socket.io');
// const http = require('http');

const server = http.createServer(app);
const io = new socket.Server(server);

io.on('connection',(socket)=>{
    socket.on('message', (msg)=>{
        io.emit('message', msg);
    })
})
app.use(express.static(path.resolve()+'/images'));
app.get('/', (req, res)=>{
    console.log(path.resolve())
    res.sendFile(path.resolve()+'/index.html');
})

server.listen(3000, ()=> {
    console.log("Server is listening to port: 3000");
});