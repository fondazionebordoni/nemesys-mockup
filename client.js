const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:54201');

// This first message is necessary for the Nemesys server/client dialogue. The content of the message is not important.
ws.on('open', function open() {
  ws.send('hello');
});

// Measurement software send json data on events. Just handle the incoming data
ws.on('message', function incoming(data) {
  console.log(data);
});
