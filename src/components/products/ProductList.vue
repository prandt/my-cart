<template>
    <div>
        <div v-for="product in products" :key="product.id">
            <v-card width="400"  class="mb-5 mx-auto" :title="product.name" >
                <v-card-text>
                    $ {{ product.price }}
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="addToCart(product)" color="primary">adicionar ao carrinho</v-btn>
                </v-card-actions>
              </v-card> 
        </div>
    </div>
</template>

<script>
import products from '@/products';

export default {
    data: () => ({
        products
    }),
    methods: {
        addToCart (product) {
            this.$store.commit('addToCart', product);
        }
    }
}
</script>