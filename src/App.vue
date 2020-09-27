<template>
  <v-app>
    <AppBar />
    <v-sheet id="scrolling-techniques-8" class="overflow-y-auto" max-height="100vh">
      <v-container style="min-height: 200vh;">
        <br><br>
        <DealOfTheDay/>
      </v-container>
    </v-sheet>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import DealOfTheDay from "./components/DealOfTheDay";
export default {
  name: "App",
  components: {
    AppBar,
    DealOfTheDay,
  },
  data: () => ({}),
};
</script>
<style scoped>
</style>
