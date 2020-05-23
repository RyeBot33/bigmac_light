const mosca = require("mosca");
const http = require("http");
const config = require("./config/config");

const httpServ = http.createServer();
const webSocketBroker = new mosca.Server({});
const broker = new mosca.Server({ port: 1885 });
//Set up websocket support
webSocketBroker.attachHttpServer(httpServ);
httpServ.listen(3003);

webSocketBroker.on("ready", () => {
  console.log("Websockets Ready!!!!");
});

webSocketBroker.on("published", function (packet, client) {
  if (client && client.id.toString().includes("mqttjs")) {
    //console.log(client.id);
    broker.publish(packet, function () {
      console.log(`packet ${JSON.stringify(packet)}`);
    });
  }
});

webSocketBroker.on("clientConnected", (client) => {
  console.log("websocket client connected", client.id);
});

//Setup main MQTT broker
broker.on("clientConnected", function (client) {
  console.log("mqtt client connected", client.id);
});

//fired when a message is received
broker.on("published", function (packet, client) {
  //console.log(packet.payload.toString());
  webSocketBroker.publish(packet, function () {
    //console.log(`${packet} published over websocket`);
  });
});

broker.on("ready", setup);

// fired when the mqtt broker is ready
function setup() {
  console.log("Mosca broker is up and running");
}
