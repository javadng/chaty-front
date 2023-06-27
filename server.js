require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const next = require('next');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cookie = require('cookie');
const jwt = require('jsonwebtoken');

const authController = require('./Controllers/authController');
const chatController = require('./Controllers/chatController');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// // middlewares
// server.use((req, res, next) => {
//   console.log('middelwear');
//   next();
// });

app.prepare().then(() => {
  const server = express();

  // Middelwares
  server.use(cookieParser());

  // Create an HTTP server instance
  const httpServer = http.createServer(server);

  // Create a new instance of the Socket.IO server
  const io = socketIO(httpServer);

  mongoose
    .connect('mongodb://127.0.0.1:27017/chaty-app')
    .then(() => console.log('DB Connected!'));

  // Middlewares
  // io.use(authMiddleware);

  // authenticate each connection
  // io.use((socket, next) => {
  //   const cookies = cookie.parse(socket.handshake.headers.cookie || '');
  //   const token = cookies.jwt;

  //   if (!token) {
  //     socket.emit('redirect', '/auth');
  //     next();
  //   }

  //   // validate token and retrieve user info
  //   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  //     if (err) {
  //       socket.emit('redirect', '/auth');
  //     } else {
  //       socket.user = decoded.user;
  //       // set HttpOnly cookie with JWT
  //       // const tokenCookie = jwt.sign(
  //       //   { user: socket.user },
  //       //   process.env.JWT_SECRET
  //       // );

  //       // socket.request.res.cookie('token', tokenCookie, { httpOnly: true });

  //       next();
  //     }
  //   });
  // });

  const onConnetion = socket => {
    console.log('New client connected');

    // API's
    authController(io, socket);
    chatController(io, socket);

    // Listen for errors on the socket instance
    socket.on('error', err => {
      console.log('Socket error:', err.message);
    });
  };

  // Listen to the connection event on the Socket.IO server
  io.on('connection', onConnetion);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server and listen on port 3000
  const port = process.env.PORT || 3000;

  // Start the HTTP server
  httpServer.listen(port, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
