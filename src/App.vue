<template>
  <v-layout>
    <v-app-bar class="justify-center">
      <template #prepend>
        <v-btn @click="$router.go(-1)">Voltar</v-btn>
      </template>
      <template v-slot:append>
        {{ cart.length  }}
        <v-btn color="primary" icon="mdi-cart" @click="$router.push({ path: 'cart' })"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  computed: {
    cart () {
      return this.$store.state.cartItems
    }
  }
}
</script>

