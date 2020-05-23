<template>
  <v-content>
    <PointWidget />
  </v-content>
</template>

<script>
import PointWidget from "../components/PointWidget";
export default {
  components: {
    PointWidget
  },
  mounted: function() {
    const that = this;
    console.log(that.$mqttClient);
    that.$mqttClient.subscribe("#");
    that.$mqttClient.on("message", function(topic, payload) {
      let string = new TextDecoder("utf-8").decode(payload);
      console.log(string);
    });
  }
};
</script>
