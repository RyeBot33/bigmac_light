<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item
          v-for="route in routes"
          :key="route.title"
          link
          :to="route.path"
        >
          <v-list-item-action>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>BSI Office</v-toolbar-title>
      <Clock />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    source: String,
  },
  data: () => ({
    routes: [
      { path: "/", icon: "mdi-home", title: "Home" },
      { path: "/split", icon: "mdi-snowflake", title: "Split System" },
      { path: "/lighting", icon: "mdi-ceiling-light", title: "Lighting" },
      { path: "/alarms", icon: "mdi-bell", title: "Alarms" },
      { path: "/schedules", icon: "mdi-calendar", title: "Schedules" },
      { path: "/histories", icon: "mdi-chart-line", title: "Histories" },
    ],
    valid: true,
    drawer: false,
    id: "",
    value: "",
    slotName: "",
    topic: "",
  }),
  methods: {
    openDrawerDelay: function() {
      setTimeout(() => {
        this.drawer = true;
      }, 2500);
    },
  },
  mounted() {
    this.openDrawerDelay();
  },
};
</script>

<style></style>
