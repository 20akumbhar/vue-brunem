<template>
  <div class="dotd">
    <v-row dense>
      <v-col v-for="(deal, i) in dotd" :key="i" cols="12">
        <v-card tile elevation="0" outlined :href="dotd.url" target="_blank">
          <v-img
            contain
            :src="deal.imageUrls[3].url"
            :lazy-src="deal.imageUrls[1].url"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <strong class="text-center d-block">{{ deal.name }}</strong>
            <!-- <v-card-title v-text="dotd.name"></v-card-title> -->
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              small
              text
              color="primary"
              block
              width="100%"
              style="overflow-x: hidden; text-emphasis: wrap"
            >
              {{ deal.title }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(["GetDotd"]),
  },
  created() {
    if (!this.dotd.length) this.GetDotd();
  },
  computed: {
    ...mapState(["dotd"]),
  },
};
</script>

<style lang="sass" scoped>

</style>