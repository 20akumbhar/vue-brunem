<template>
  <div class="categories">
    <h3 class="text-center">Categories</h3>
    <v-row dense v-if="cat_loading">
      <v-col v-for="s in sk" :key="s" cols="12">
        <v-skeleton-loader width="100%" height="100%" type="list-item">
        </v-skeleton-loader>
      </v-col>
    </v-row>
    <v-card
      elevation="0"
      outlined
      shaped
      v-for="(category, i) in categories"
      :key="i"
    >
      <v-card-title>{{ category.apiName.split("_").join(" ") }}</v-card-title>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data(){
    return{
      sk: [1,2,3,4,5,6,7,8,9,0]
    }
  },
  methods: {
    ...mapActions(["GetCategories"]),
  },
  created() {
    this.GetCategories();
  },
  computed: {
    ...mapState(["categories","cat_loading"]),
  },
};
</script>

<style scoped>
.title {
  text-transform: capitalize;
}
.v-card {
  margin-top: 10px;
}
</style>