let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);


const port = 3000;

io.on('connection', (socket) => {
    console.log('user connected');
    socket.emit('test event', 'blab,ablbalba');
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});