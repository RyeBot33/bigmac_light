import mqtt from "mqtt";
import config from "../config/config";

const Mqtt = {
  install(Vue) {
    //const mqttUri = config.mqttUri;
    const port = config.mqttPort;
    var client = mqtt.connect(`ws://localhost:${port}`);

    Vue.prototype.$mqttClient = client;
  },
};

export default Mqtt;
