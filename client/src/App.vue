 
<template>
  <v-app id="inspire">
    <Nav-Bar></Nav-Bar>
    <router-view></router-view>
    <v-footer color="indigo" app>
      <span class="white--text">&copy;{BSI} // {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {},
  data: () => ({})
};
</script>