<template>
  <div class="categories">
    <h3 class="text-center">Categories</h3>
    <v-card elevation="0" outlined shaped v-for="(category, i) in categories" :key="i">
        <v-card-title>{{category.apiName.split("_").join(" ")}}</v-card-title>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["GetCategories"]),
  },
  created() {
    this.GetCategories();
  },
  computed: {
    ...mapState(["categories"]),
  },
};
</script>

<style scoped>
.title {
  text-transform: capitalize;
}
.v-card{
    margin-top: 10px;
}
</style>