<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field label="Search" v-model="word"></v-text-field>
      </v-col>
      <v-col>
        <v-btn class="mx-2" fab dark color="blue lighten-34" @click="searchItem">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
            
<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      search: [],
      word: "",
    };
  },
  methods: {
    searchItem() {
      axios
        .get("https://api.mercadolibre.com/sites/MCO/search?q=" + this.word)
        .then((response) => {
          this.search = response.data;
          this.$emit("searchResult", response.data);
          console.log(response.data)
        });
    },
  },
};
</script>