import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

import Mqtt from "./plugins/mqtt";
import NavBar from "./components/NavBar";

Vue.use(Mqtt);

Vue.config.productionTip = false;

Vue.component("Nav-Bar", NavBar);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
