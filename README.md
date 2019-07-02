# Nemesys measurement software mockup (for GUI development)

Nemesys opens a websocket server to talk with the GUI. When developing the GUI, use these mockups that simulate the measurement software in order to test your GUI for incoming measurement messages.

Your GUI should handle all messages sent by the mockups in the same way the provided client.js websocket client does.

The mockups:

* **nemesys.js**: it's a complete mockup for (hopefully) all possible messages sent by Nemesys in, roughly, the same order (beginning from waiting for measurement start).
* **nemesys_lite.js**: a stripped down mockup version of Nemesys that performs only a simple measurement session

## Requirements

* Node.js
* npm (or yarn)

## How to start the mockup

Install the necessary software:

```
npm install
```

Start the mockup:

```
node nemesys.js
```

Your mockup will now listen on localhost port 54201 for incoming websocket clients.

You can check your mockup server with the provided mockup client. Just execute:

```
node client.js
```

and enjoy reading the messages on the console.

