<template>
  <div class="home">
    <v-row dense v-if="dotd_loading">
      <v-col cols="12">
        <v-skeleton-loader width="100%" height="100%" type="image">
        </v-skeleton-loader>
      </v-col>
    </v-row>
    <DealOfTheDay />

    <v-row dense v-if="offers_loading">
      <v-col cols="6" v-for="(s, i) in skeleton" :key="i">
        <v-skeleton-loader width="100%" height="100%" type="card">
        </v-skeleton-loader>
      </v-col>
    </v-row>

    <Offers />
  </div>
</template>

<script>
// @ is an alias to /src
import DealOfTheDay from "@/components/DealOfTheDay";
import Offers from "@/components/Offers";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    DealOfTheDay,
    Offers,
  },
  data: () => ({
    skeleton: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  }),
  computed: {
    ...mapState(["offers_loading", "dotd_loading"]),
  },
};
</script>
