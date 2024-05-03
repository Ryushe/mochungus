const express = require('express');
const WebSocket = require('ws');

// Create an Express app
const app = express();

// Create a WebSocket server
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

// Handle WebSocket connections
wss.on('connection', function (ws) {
  // Send a message to the client
  ws.send('Hello, client!');

  // Listen for messages from the client
  ws.on('message', function (message) {
    console.log('Received message:', message);
  });

  // Listen for the close event
  ws.on('close', function () {
    console.log('Client disconnected');
  });
});

// Start the server
server.listen(3000, function () {
  console.log('Server started on port 3000');
});