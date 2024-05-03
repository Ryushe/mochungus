const socket = new WebSocket('wss://payloads/redo/server.js:3000');

socket.addEventListener('open', function (event) {
  // The connection has been established
});

socket.addEventListener('message', function (event) {
  // A message has been received from the server
});

socket.addEventListener('close', function (event) {
  // The connection has been closed
});