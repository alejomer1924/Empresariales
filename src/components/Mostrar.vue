<template>
  <v-container>
    <v-card class="mx-auto" max-width="344" v-bind:key="item.id" v-for="item in items.results">
      <v-row>
        <v-img class="ma-2" :src="item.thumbnail"></v-img>
        <v-card-title>{{item.title}}</v-card-title>
        <v-card-subtitle>Precio: {{item.price}}</v-card-subtitle>
        <v-card-subtitle>Cantidad: {{item.available_quantity}}</v-card-subtitle>
        <v-card-subtitle>Id Vendedor: {{item.seller.id}}</v-card-subtitle>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Mostrar",
  props: ["items"],
};
</script>