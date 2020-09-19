<template>
  <v-app>
    <Toolbar />

    <v-main>
      <Search v-on:searchResult="searchResult" />
      <Mostrar v-bind:items="items" />
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Search from "./components/Search";
import Mostrar from "./components/Mostrar";

export default {
  name: "App",

  components: {
    Toolbar,
    Search,
    Mostrar,
  },
  methods: {
    searchResult(response) {
      this.items = response;
    },
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>
