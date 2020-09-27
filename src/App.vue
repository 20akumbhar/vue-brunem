<template>
  <v-app>
    <AppBar />
    <v-sheet id="scrolling-techniques-8" class="overflow-y-auto" max-height="100vh">
      <v-container fluid style="min-height: 150vh;">
        <br><br>
        <router-view/>
      </v-container>
    </v-sheet>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
export default {
  name: "App",
  components: {
    AppBar,
  },
  data: () => ({}),
};
</script>

<style lang="scss">

</style>
