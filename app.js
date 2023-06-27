const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const next = require('next');
const config = require('./utils/config');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const httpServer = http.createServer(server);
  const io = new Server(httpServer);

  // Socket.IO connection event
  io.on('connection', socket => {
    console.log('A user connected');

    // Handle socket events here
    // Example: socket.on('event', data => { ... })

    // Disconnect event
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;

  httpServer.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
