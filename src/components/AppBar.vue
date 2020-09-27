<template>
  <div>
    <v-app-bar
      :dark="search"
      :color="search ? 'primary' : 'white'"
      flat
      hide-on-scroll
      absolute
      scroll-target="#scrolling-techniques-8"
    >
      <v-app-bar-nav-icon v-if="!search" @click="NavigationDrawer=!NavigationDrawer"></v-app-bar-nav-icon>
      <v-btn v-if="search" icon @click="search=!search">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title v-if="!search">BRUNEM</v-toolbar-title>

      <v-spacer v-if="!search"></v-spacer>

      <input v-if="search" class="searchBox" type="search" placeholder="Search in BRUNEM.." />

      <v-btn icon @click="search=true">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-app-bar
      absolute
      color="primary"
      dark
      inverted-scroll
      scroll-target="#scrolling-techniques-8"
    >
      <v-app-bar-nav-icon @click="NavigationDrawer=!NavigationDrawer"></v-app-bar-nav-icon>

      <input class="searchBox" type="search" placeholder="Search in BRUNEM.." />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="NavigationDrawer" absolute floating>
      <v-list shaped>
        <v-subheader>BRUNEM</v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    NavigationDrawer: false,
    search: false,
    item: 1,
    items: [
      { text: "Home", icon: "mdi-home" },
      { text: "Deal of the Day", icon: "mdi-shopping" },
      { text: "Categories", icon: "mdi-view-dashboard" },
      { text: "About", icon: "mdi-information" },
    ],
  }),
};
</script>

<style scoped>
.searchBox {
  width: 90%;
  background: white;
  border-radius: 6px;
  padding: 6px 20px;
}
.searchBox:focus {
  outline: none;
}
.v-app-bar.primary{
  z-index: 999;
}
</style>