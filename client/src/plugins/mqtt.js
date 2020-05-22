import mqtt from "mqtt";
import config from "../config/config";

const Mqtt = {
  install(Vue) {
    const mqttUri = config.mqttUri;
    var client = mqtt.connect(mqttUri);

    Vue.prototype.$mqttClient = client;
  },
};

export default Mqtt;
