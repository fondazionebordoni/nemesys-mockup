var WebSocketServer = require("ws").Server; //importo la libreria per creare il server

var arrayOfMessages = [
  { type: "profilation", content: { done: "False" } },
  { type: "profilation", content: { done: "True" } },
  { type: "resume", content: { test_type: "ping" } },
  { type: "measure", content: { test_type: "ping" } },
  {
    type: "test",
    content: { test_type: "ping", n_tot: 4, retry: "False", n_test: 1 }
  },
  { type: "tachometer", content: { value: 2.464567897654 } },
  {
    type: "test",
    content: { test_type: "ping", n_tot: 4, retry: "False", n_test: 2 }
  },
  { type: "tachometer", content: { value: 2.3456789 } },
  {
    type: "test",
    content: { test_type: "ping", n_tot: 4, retry: "False", n_test: 3 }
  },
  { type: "tachometer", content: { value: 2.6767677676767 } },
  {
    type: "test",
    content: { test_type: "ping", n_tot: 4, retry: "False", n_test: 4 }
  },
  { type: "tachometer", content: { value: 2.23456789 } },

  { type: "result", content: { test_type: "ping", result: 2.23456789 } },

  { type: "measure", content: { test_type: "download", bw: 0 } },
  {
    type: "test",
    content: { test_type: "download", n_tot: 1, retry: "False", n_test: 1 }
  },
  { type: "tachometer", content: { value: 90.23456789 } },
  { type: "tachometer", content: { value: 72.98767898789 } },
  { type: "tachometer", content: { value: 82.3456789 } },
  { type: "tachometer", content: { value: 90.23456789 } },
  { type: "tachometer", content: { value: 72.98767898789 } },
  { type: "tachometer", content: { value: 82.3456789 } },
  { type: "tachometer", content: { value: 90.23456789 } },
  { type: "tachometer", content: { value: 72.98767898789 } },
  { type: "tachometer", content: { value: 82.3456789 } },
  { type: "tachometer", content: { value: 90.23456789 } },
  { type: "tachometer", content: { value: 72.98767898789 } },
  { type: "tachometer", content: { value: 82.3456789 } },

  {
    type: "result",
    content: { spurious: 0.0513456789, test_type: "download", result: 89936 }
  },

  { type: "measure", content: { test_type: "upload", bw: 0 } },
  {
    type: "test",
    content: { test_type: "upload", n_tot: 1, retry: "False", n_test: 1 }
  },
  { type: "tachometer", content: { value: 34.23456789 } },
  { type: "tachometer", content: { value: 36.98767898789 } },
  { type: "tachometer", content: { value: 23.3456789 } },
  { type: "tachometer", content: { value: 34.23456789 } },
  { type: "tachometer", content: { value: 35.98767898789 } },
  { type: "tachometer", content: { value: 37.3456789 } },
  { type: "tachometer", content: { value: 20.23456789 } },
  { type: "tachometer", content: { value: 36.98767898789 } },
  { type: "tachometer", content: { value: 30.3456789 } },
  { type: "tachometer", content: { value: 32.23456789 } },
  { type: "tachometer", content: { value: 22.98767898789 } },
  { type: "tachometer", content: { value: 32.3456789 } },

  {
    type: "result",
    content: { spurious: 0.044567845678, test_type: "upload", result: 35785 }
  },

  {
    type: "wait",
    content: { seconds: 30, message: "Aspetto 30 secondi prima di continuare" }
  }
];

wss = new WebSocketServer({ port: 54201 });

wss.on("connection", function(ws) {
  ws.on("message", function(message) {
    console.log(`Starting message received: "${message}"`);
    for (let i = 0; i < arrayOfMessages.length; i++) {
      setTimeout(function() {
        ws.send(JSON.stringify(arrayOfMessages[i]));
      }, 500 * (i + 1));
    }
  });
});
