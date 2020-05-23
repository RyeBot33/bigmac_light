module.exports = {
  mqttUri: process.env.MQTT_URI,
  mqttPort: process.env.WS_PORT || 3003,
  server: process.env.BACKEND,
  broker: process.env.BROKER,
};
