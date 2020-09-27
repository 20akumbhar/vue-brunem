<template>
  <div class="deal-of-the-day">
    <v-carousel
      cycle
      height="200"
      delimiter-icon="mdi-minus"
      show-arrows-on-hover
      hide-delimiters
    >
      <v-carousel-item v-for="(deal, i) in dotd" :key="i" :href="deal.url">
        <div
          class="c-item white--text"
          :style="{ backgroundImage: 'url(' + deal.imageUrls[2].url + ')' }"
        >
          <div class="dotd-text">
            <h4>{{ deal.title }}</h4>
            <h2>{{ deal.name }}</h2>
            <strong>{{ deal.description }}</strong>
            <br />
            <br />
            <v-btn small light>Get Now</v-btn>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
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

<style scoped>
.v-sheet {
  background-size: cover;
  background-repeat: no-repeat;
}
.c-item {
  height: 100%;
  width: 100%;
  border: 1px solid #00000050;
  background-size: cover;
}
.dotd-text {
  height: 100%;
  width: 100%;
  background-color: #00000078;
  text-align: center;
}
.dotd-text h4 {
  background-color: #0000007e;
  height: 30px;
  width: 100%;
  text-align: start;
  padding: 0px 40px;
}
.dotd-text h2 {
  justify-self: center;
  margin-top: 20px;
}
</style>