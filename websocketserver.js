const http = require('http');
const WebSocketServer = require('websocket').server;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const server = http.createServer();
server.listen(9898);

const wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);

    connection.on('message', async function(message) {
      console.log(message.utf8Data);
      const { stdout, stderr } = await exec(message.utf8Data);
      console.log('stdout:', stdout);
      console.log('stderr:', stderr);
      connection.sendUTF('Hi this is WebSocket server!');
    });
    connection.on('close', function(reasonCode, description) {
        console.log('Client has disconnected.');
    });
});
