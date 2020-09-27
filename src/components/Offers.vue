<template>
  <div>
    <v-row dense>
      <v-col v-for="(offer, i) in offers" :key="i" :cols="i % 11 == 0 ? 12 : 6">
        <v-card>
          <v-img
            contain
            :src="offer.imageUrls[3].url"
            :lazy-src="offer.imageUrls[1].url"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <strong class="text-center d-block">{{ offer.name }}</strong>
            <!-- <v-card-title v-text="offer.name"></v-card-title> -->
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small text>
                Check Now
              <!-- <v-icon>mdi-share-variant</v-icon> -->
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    skeleton: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  }),
  methods: {
    ...mapActions(["GetOffers"]),
  },
  created() {
    this.GetOffers();
  },
  computed: {
    ...mapState(["offers", "offers_loading"]),
  },
};
</script>

<style scoped>
</style>